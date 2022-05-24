import React from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './DataGrid.css';
import { generateCustomerPurchaseHistory } from '../../models/CustomerDataGenerator';
import { CustomerPurchase, ProductType } from '../../models/CustomerModel';
import { dateFormatter, productFormatter, shipmentStatusFormatter } from '../../utils/GridUtils';

export interface FilterSelection {
  customerName: string | null;
  productCategory: ProductType | null;
}

export interface DataGridState {
  gridSettings: {
    columnDefs: ColDef[],
    defaultColDef: ColDef,
    rowData: CustomerPurchase[] | null
  },
  filterSelection: FilterSelection | null
}

export default class DataGrid extends React.Component<FilterSelection, DataGridState> {
  private gridApi: GridApi | null = null;
  private gridColumnApi: ColumnApi | null = null;

  constructor(props: FilterSelection | Readonly<FilterSelection>) {
    super(props);

    this.state = {
      gridSettings: {
        columnDefs: [
          { field: 'customerName', headerName: "Customer Name" },
          { field: 'date', headerName: "Placement Date", sort: 'desc', filter: 'date', valueFormatter: dateFormatter },
          { field: 'orderId', headerName: "Order ID" },
          { field: 'product', headerName: "Product", cellRenderer: productFormatter },
          { field: 'orderStatus', headerName: "Status", cellRenderer: shipmentStatusFormatter },
          { field: 'price', headerName: "Purchase Price (£)", filter: 'number' }
          ],
        defaultColDef: {
          flex: 1,
          minWidth: 150,
          sortable: true,
          resizable: true,
          filter: true,
          floatingFilter: true
        }, 
        rowData: null
      },
      filterSelection: this.props     
    };
  }

  static getDerivedStateFromProps(props: any, state: { gridSettings: any; }) {
    return { 
      gridSettings: state.gridSettings, filterSelection: props 
    };
  }

  componentDidUpdate(prevProps: FilterSelection) {
    if (this.props.customerName == prevProps.customerName && 
        this.props.productCategory == prevProps.productCategory) {
      return;
    }

    this.applyFilterSelection();
  }

  private applyFilterSelection() {
    const customerInstance = this.gridApi!.getFilterInstance('customerName');
    const selectedCustomers: string[] | null = this.state.filterSelection?.customerName ? 
       this.state.filterSelection?.customerName?.split(',') : null;
    customerInstance?.setModel({ values: selectedCustomers });

    const productInstance = this.gridApi!.getFilterInstance('product');
    const selectedProducts: string[] | null = this.state.filterSelection?.productCategory ? 
        [this.state.filterSelection?.productCategory] : null;
    productInstance?.setModel({ values: selectedProducts });
    
    this.gridApi!.onFilterChanged();
  }

  onGridReady(params: { api: GridApi | null; columnApi: ColumnApi | null; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const customerData = generateCustomerPurchaseHistory(100);
    this.gridApi?.setRowData(customerData);
    
    this.applyFilterSelection();
  }

  render() {
    return (         
          <div
            style={{
              height: '100%',
              width: '100%',
            }} className="ag-theme-balham-dark" data-testid="GridContainer">
              <AgGridReact
                columnDefs={this.state.gridSettings.columnDefs}
                defaultColDef={this.state.gridSettings.defaultColDef}
                onGridReady={this.onGridReady.bind(this)}
                rowData={this.state.gridSettings.rowData}
                paginationAutoPageSize={true}
                pagination={true}/>
          </div>                  
    );
  }
}

import React from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
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

interface DataGridState {
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

  componentDidUpdate(prevProps: FilterSelection) {
    if (this.props.customerName == prevProps.customerName) {
      return;
    }

    const newState: DataGridState = { gridSettings: this.state.gridSettings, filterSelection: this.props };
    this.setState(newState);
    this.applyFilterSelection();
  }

  private applyFilterSelection() {
    const customerInstance = this.gridApi!.getFilterInstance('customerName');
    customerInstance?.setModel({ values: [this.state.filterSelection?.customerName] });

    const productInstance = this.gridApi!.getFilterInstance('product');
    productInstance?.setModel({ values: [this.state.filterSelection?.productCategory] });
    
    this.gridApi!.onFilterChanged();
  }

  onGridReady (params: { api: GridApi | null; columnApi: ColumnApi | null; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const customerData = generateCustomerPurchaseHistory(100);
    this.gridApi?.setRowData(customerData);
    
    const customerInstance = this.gridApi!.getFilterInstance('customerName');
    customerInstance?.setModel({ values: ['B. Bunny'] });

    const productInstance = this.gridApi!.getFilterInstance('product');
    productInstance?.setModel({ values: ['Anvil'] });

    this.gridApi!.onFilterChanged();
  }

  render() {
    return (         
          <div
            style={{
              height: '100%',
              width: '100%',
            }} className="ag-theme-balham-dark">
              <AgGridReact
                columnDefs={this.state.gridSettings.columnDefs}
                defaultColDef={this.state.gridSettings.defaultColDef}
                onGridReady={this.onGridReady}
                rowData={this.state.gridSettings.rowData}
                paginationAutoPageSize={true}
                pagination={true}/>
          </div>                  
    );
  }
}

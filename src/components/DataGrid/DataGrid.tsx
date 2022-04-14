import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './DataGrid.css';
import { generateCustomerPurchaseHistory } from '../../models/CustomerDataGenerator';
import { CustomerPurchase } from '../../models/CustomerModel';
import { dateFormatter, productFormatter, shipmentStatusFormatter } from '../../utils/GridUtils';

interface DataGridState {
  gridSettings: {
    columnDefs: ColDef[],
    defaultColDef: ColDef,
    rowData: CustomerPurchase[] | null
  }
}

export default class DataGrid extends Component<AgGridReactProps, DataGridState> {
  private gridApi: GridApi | null = null;
  private gridColumnApi: ColumnApi | null = null;

  constructor(props: AgGridReactProps | Readonly<AgGridReactProps>) {
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
      }     
    };
  }

  onGridReady (params: { api: GridApi | null; columnApi: ColumnApi | null; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const customerData = generateCustomerPurchaseHistory(100);
    this.gridApi?.setRowData(customerData);
  }

  render() {
    return (         
          <div
            style={{
              height: '70%',
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

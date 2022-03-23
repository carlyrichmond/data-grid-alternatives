import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { dateFormatter, productFormatter, shipmentStatusFormatter } from '../../utils/GridUtils';
import { generateCustomerPurchaseHistory } from '../../models/CustomerDataGenerator';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

interface PivotTableState {
  columnDefs: ColDef[],
  defaultColDef: ColDef,
  autoGroupColumnDef: ColDef,
  rowData: any[] | null

}

export default class PivotTable extends Component<AgGridReactProps, PivotTableState> {
  private gridApi: GridApi | null = null;
  private gridColumnApi: ColumnApi | null = null;

  constructor(props: AgGridReactProps | Readonly<AgGridReactProps>) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'customerName', headerName: "Customer Name", rowGroup: true, enableRowGroup: true },
        { field: 'date', headerName: "Placement Date", sort: 'desc', filter: 'date', valueFormatter: dateFormatter },
        { field: 'orderId', headerName: "Order ID" },
        { field: 'product', headerName: "Product", cellRenderer: productFormatter, pivot: true, enablePivot: true },
        { field: 'orderStatus', headerName: "Status", cellRenderer: shipmentStatusFormatter, pivot: true, enablePivot: true },
        { field: 'price', headerName: "Purchase Price (£)", filter: 'number', aggFunc: 'count', enablePivot: true }
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 150,
        sortable: true,
        resizable: true,
      },
      autoGroupColumnDef: {
        minWidth: 250,
      },
      rowData: null,
    };
  }

  onGridReady = (params: { api: GridApi | null; columnApi: ColumnApi | null; }) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const customerData = generateCustomerPurchaseHistory(150);
    this.gridApi?.setRowData(customerData);
  };

  render() {
    return (

      <div className='pivot-container'>
        
        <DashboardHeader viewTitle="Sales Analytics"/>

        <div style={{ width: '100%', height: '92.5vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div
              style={{
                height: '100%',
                width: '100%',
              }}
              className="ag-theme-balham-dark"
            >
              <AgGridReact
                columnDefs={this.state.columnDefs}
                defaultColDef={this.state.defaultColDef}
                autoGroupColumnDef={this.state.autoGroupColumnDef}
                pivotMode={true}
                sideBar={true}
                onGridReady={this.onGridReady}
                rowData={this.state.rowData}
              />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

render(<PivotTable></PivotTable>, document.querySelector('#root'));

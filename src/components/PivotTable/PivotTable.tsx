import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
        { field: 'country', rowGroup: true, enableRowGroup: true },
        { field: 'athlete', aggFunc: 'count', enablePivot: true },
        { field: 'sport', pivot: true, enablePivot: true },
        { field: 'year', enablePivot: true },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
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

    const updateData = (data: any[]) => params.api?.setRowData(data);

    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  };

  render() {
    return (
      <div style={{ width: '100%', height: '80vh' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <div
            style={{
              height: '100%',
              width: '100%',
            }}
            className="ag-theme-alpine"
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
    );
  }
}

render(<PivotTable></PivotTable>, document.querySelector('#root'));

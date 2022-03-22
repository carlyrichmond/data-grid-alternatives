import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './SameOldDataGrid.css';
import { Autocomplete, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, ThemeProvider } from '@mui/material';
import { initializeDarkTheme } from '../../theme/MUIThemeInitialisation';

interface SameOldDataGridState {
  gridSettings: {
    columnDefs: ColDef[],
    defaultColDef: ColDef,
    rowData: any[] | null
  },
  selectedFilters: {
    selectedProducts: string[],
    selectedCustomers: string
  }
}

export default class SameOldDataGrid extends Component<AgGridReactProps, SameOldDataGridState> {
  private gridApi: GridApi | null = null;
  private gridColumnApi: ColumnApi | null = null;
  private customerAutocompleteSettings = {
    options: ['W.E. Coyote', 'R. Runner', 'P. Le Pew', 'B. Bunny', 'D. Duck', 'M. Martian'],
  };

  private readonly ITEM_HEIGHT = 48;
  private readonly ITEM_PADDING_TOP = 8;
  private readonly MenuProps = {
    PaperProps: {
      style: {
        maxHeight: this.ITEM_HEIGHT * 4.5 + this.ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  private products: string[] = ['Anvil', 'Super Giant Rubber Band', 'Giant Rubber Band', 'Gift Card'];

  constructor(props: AgGridReactProps | Readonly<AgGridReactProps>) {
    super(props);

    this.state = {
      // TODO change settings and data to match product domain
      gridSettings: {
        columnDefs: [
        { field: 'country' },
        { field: 'athlete' },
        { field: 'sport' },
        { field: 'year' },
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
      rowData: null
    },
    selectedFilters: {
      selectedProducts: [],
      selectedCustomers: ''
    }      
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

  private handleProductMultiselectChange(event: SelectChangeEvent<typeof this.state.selectedFilters.selectedProducts>) {
    const {
      target: { value },
    } = event;
    const newState: SameOldDataGridState = this.state;
    newState.selectedFilters.selectedProducts = value === 'string' ? value.split(',') : [value] as string[];
    // TODO apply transform on data in grid
    this.setState(newState);
  }

  render() {

    const dropdownDarkModeTheme: Theme = initializeDarkTheme();

    return (
      <div className="customer-dashboard-container" style={{ width: '100%', height: '100vh' }}>
        <h2>ACME Customer Purchase Dashboard</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            
            <div className="filters-toolbar">
            <ThemeProvider theme={dropdownDarkModeTheme}>
              <Autocomplete sx={{ m: 1, width: 400 }}
              {...this.customerAutocompleteSettings}
              id="auto-complete"
              value={this.state.selectedFilters.selectedCustomers}
              autoComplete
              includeInputInList
              renderInput={(params) => (
              <TextField {...params} label="Customers" variant="standard" />)}/>
              
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="product-multiselect-label">Name</InputLabel>
                <Select
                  labelId="product-multiselect-label"
                  id="product-multiselect"
                  multiple
                  value={this.state.selectedFilters.selectedProducts}
                  onChange={this.handleProductMultiselectChange}
                  input={<OutlinedInput label="Products" />}
                  MenuProps={this.MenuProps}>
                  {this.products.map((product) => (
                    <MenuItem
                      key={product}
                      value={product}>
                      {product}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
        </ThemeProvider>
        </div>
          
          <div
            style={{
              height: '90%',
              width: '90%',
            }}
            className="ag-theme-balham-dark">
            <AgGridReact
              columnDefs={this.state.gridSettings.columnDefs}
              defaultColDef={this.state.gridSettings.defaultColDef}
              onGridReady={this.onGridReady}
              rowData={this.state.gridSettings.rowData}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<SameOldDataGrid></SameOldDataGrid>, document.querySelector('#root'));

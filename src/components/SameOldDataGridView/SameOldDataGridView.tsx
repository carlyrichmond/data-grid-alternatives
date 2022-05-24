import React, { Component } from 'react';
import { render } from 'react-dom';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './SameOldDataGridView.css';
import { Autocomplete, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, ThemeProvider } from '@mui/material';
import { initializeDarkTheme } from '../../theme/MUIThemeInitialisation';
import { CUSTOMERS, PRODUCTS } from '../../models/CustomerDataGenerator';
import DataGrid from '../DataGrid/DataGrid.lazy';
import { FilterSelection } from '../DataGrid/DataGrid';

interface SameOldDataGridViewState {
  selectedFilters: {
    selectedProducts: string[],
    selectedCustomers: string
  }
}

export default class SameOldDataGridView extends Component<any, SameOldDataGridViewState> {
  private gridApi: GridApi | null = null;
  private gridColumnApi: ColumnApi | null = null;
  private customerAutocompleteSettings = {
    options: CUSTOMERS,
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

  constructor(props: any | Readonly<any>) {
    super(props);

    this.state = {
      selectedFilters: {
        selectedProducts: [],
        selectedCustomers: ''
      }      
    };
  }

  private handleProductMultiselectChange(event: SelectChangeEvent<typeof this.state.selectedFilters.selectedProducts>) {
    const {
      target: { value },
    } = event;
    const newState: SameOldDataGridViewState = this.state;
    newState.selectedFilters.selectedProducts = value === 'string' ? value.split(',') : [value] as string[];
    this.setState(newState);
  }

  render() {

    const dropdownDarkModeTheme: Theme = initializeDarkTheme();

    /* Normally we would wire the grid props with the current selection 
    instead of defaulting the value as I have done here */
    const emptySelection: FilterSelection = { customerName: null, productCategory: null };

    return (
      <ThemeProvider theme={dropdownDarkModeTheme}>
      <div className="customer-dashboard-container" style={{ width: '100%', height: '87vh' }}>
        
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            
          <div className="filters-toolbar">
            
              <Autocomplete sx={{ m: 1, width: 400 }}
              {...this.customerAutocompleteSettings}
              id="auto-complete"
              data-testid="Autocomplete"
              value={this.state.selectedFilters.selectedCustomers}
              autoComplete
              includeInputInList
              renderInput={(params) => (
              <TextField {...params} label="Customers" variant="standard" />)}/>
              
              <FormControl sx={{ m: 1, width: 300 }} className="toolbar-component">
                <InputLabel id="product-multiselect-label">Products</InputLabel>
                <Select
                  labelId="product-multiselect-label"
                  id="product-multiselect"
                  data-testid="SelectControl"
                  multiple
                  value={this.state.selectedFilters.selectedProducts}
                  onChange={this.handleProductMultiselectChange}
                  input={<OutlinedInput label="Products" />}
                  MenuProps={this.MenuProps}>
                  {PRODUCTS.map((product) => (
                    <MenuItem
                      key={product}
                      value={product}>
                      {product}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </div>
          
          <DataGrid { ...emptySelection } />           
        </div>
      </div>
      </ThemeProvider>
    );
  }
}

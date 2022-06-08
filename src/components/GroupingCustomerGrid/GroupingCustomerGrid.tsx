import React from 'react';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './GroupingCustomerGrid.css';
import { Autocomplete, createTheme, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Theme, ThemeProvider } from '@mui/material';
import { CUSTOMERS, generateCustomerPurchaseHistory, PRODUCTS } from '../../models/CustomerDataGenerator';
import { CustomerPurchase, ProductType } from '../../models/CustomerModel';
import { dateFormatter, productFormatter, shipmentStatusFormatter } from '../../utils/GridUtils';

interface GroupingCustomerGridState {
  gridSettings: {
    columnDefs: ColDef[],
    defaultColDef: ColDef,
    rowData: CustomerPurchase[] | null
  },
  selectedFilters: {
    selectedProducts: ProductType[],
    selectedCustomers: string
  }
}

export default class GroupingCustomerGrid extends React.Component<AgGridReactProps, GroupingCustomerGridState> {
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

  constructor(props: AgGridReactProps | Readonly<AgGridReactProps>) {
    super(props);

    this.state = {
      gridSettings: {
        columnDefs: [
        { field: 'customerName', headerName: "Customer Name", rowGroup: true, hide: true },
        { field: 'recipient', headerName: "Recipient" },
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
    // Hardcoded filters used in place of update callback
    selectedFilters: {
      selectedProducts: ['Gift Card'],
      selectedCustomers: ''
    }      
    };
  }

  onGridReady (params: { api: GridApi | null; columnApi: ColumnApi | null; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const customerData = generateCustomerPurchaseHistory(150)
      .filter((purchase: CustomerPurchase) => this.state.selectedFilters.selectedProducts.includes(purchase.product));
    this.gridApi?.setRowData(customerData);
  }

  render() {

    const dropdownDarkModeTheme: Theme = createTheme({
      palette: {
        mode: 'dark'
      },
    });

    return (
      <ThemeProvider theme={dropdownDarkModeTheme}>
      <div className="customer-dashboard-container" style={{ width: '100%', height: '100vh' }}>
        
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            
            <div className="filters-toolbar">
            
              <Autocomplete sx={{ m: 1, width: 400 }}
              {...this.customerAutocompleteSettings}
              id="auto-complete"
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
                  multiple
                  value={this.state.selectedFilters.selectedProducts}
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
          
          <div
            style={{
              height: '70%',
              width: '90%',
            }}
            className="ag-theme-balham-dark"
            data-testid="GroupingGridContainer">
            <AgGridReact
              columnDefs={this.state.gridSettings.columnDefs}
              defaultColDef={this.state.gridSettings.defaultColDef}
              onGridReady={this.onGridReady.bind(this)}
              rowData={this.state.gridSettings.rowData}
              groupDisplayType="groupRows"
            />
          </div>            
        </div>
      </div>
      </ThemeProvider>
    );
  }
}

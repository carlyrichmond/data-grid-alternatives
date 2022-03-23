import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridReactProps} from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi, ICellRendererParams } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './SameOldDataGrid.css';
import { Autocomplete, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, ThemeProvider } from '@mui/material';
import { initializeDarkTheme } from '../../theme/MUIThemeInitialisation';
import { CUSTOMERS, generateCustomerPurchaseHistory, PRODUCTS } from '../../models/CustomerDataGenerator';
import { CustomerPurchase, OrderStatus, orderStatusMapping, productIconMapping, ProductType } from '../../models/CustomerModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway } from '@fortawesome/free-solid-svg-icons';

interface SameOldDataGridState {
  gridSettings: {
    columnDefs: ColDef[],
    defaultColDef: ColDef,
    rowData: CustomerPurchase[] | null
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
        { field: 'customerName', headerName: "Customer Name" },
        { field: 'date', headerName: "Placement Date", sort: 'desc', filter: 'date', valueFormatter: this.dateFormatter },
        { field: 'orderId', headerName: "Order ID" },
        { field: 'product', headerName: "Product", cellRenderer: this.productFormatter },
        { field: 'orderStatus', headerName: "Status", cellRenderer: this.shipmentStatusFormatter },
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
    selectedFilters: {
      selectedProducts: [],
      selectedCustomers: ''
    }      
    };
  }

  private dateFormatter(params: { data: { date: Date; }; }) {
    const orderDate = params.data.date;
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

    return orderDate.toLocaleDateString('en-GB', options);
  }

  private shipmentStatusFormatter(params: ICellRendererParams) {
    const status: OrderStatus = params.data.orderStatus as OrderStatus;
    const icon = orderStatusMapping[status];
    return <span><FontAwesomeIcon className="product-icon" icon={icon}/>{status}</span>
  }

  private productFormatter(params: ICellRendererParams) {
    const product: ProductType = params.data.product as ProductType;
    const icon = productIconMapping[product];
    return <span><FontAwesomeIcon className="product-icon" icon={icon}/>{product}</span>
  }

  onGridReady = (params: { api: GridApi | null; columnApi: ColumnApi | null; }) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const customerData = generateCustomerPurchaseHistory(100);

    params.api?.setRowData(customerData);
  }

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
      <ThemeProvider theme={dropdownDarkModeTheme}>
      <div className="customer-dashboard-container" style={{ width: '100%', height: '100vh' }}>
        
        <div className="app-header">
          <h1>ACME <FontAwesomeIcon className="acme-icon" icon={faArchway}/></h1>
          <h2>Sales Portal</h2>
        </div>
        
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
          
          <div
            style={{
              height: '80%',
              width: '90%',
            }}
            className="ag-theme-balham-dark">
            <AgGridReact
              columnDefs={this.state.gridSettings.columnDefs}
              defaultColDef={this.state.gridSettings.defaultColDef}
              onGridReady={this.onGridReady}
              rowData={this.state.gridSettings.rowData}
              paginationAutoPageSize={true}
              pagination={true}
            />
          </div>            
        </div>
      </div>
      </ThemeProvider>
    );
  }
}

render(<SameOldDataGrid></SameOldDataGrid>, document.querySelector('#root'));

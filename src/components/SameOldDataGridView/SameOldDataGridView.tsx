import React from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './SameOldDataGridView.css';
import { EuiSelect, EuiSelectOption, EuiComboBox, EuiComboBoxOptionOption, EuiSwitch } from '@elastic/eui';
import { CUSTOMERS, PRODUCTS } from '../../models/DataGenerator';
import DataGrid from '../DataGrid/DataGrid.lazy';
import { FilterSelection } from '../DataGrid/DataGrid';
import { ProductType } from '../../models/CustomerModel';

interface SameOldDataGridViewState {
  selectedFilters: FilterSelection;
}

export default class SameOldDataGridView extends React.Component<Record<string, never>, SameOldDataGridViewState> {
  
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

  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      selectedFilters: {
        customerName: undefined,
        productCategory: null
      }      
    };
  }

  render() {

    /* Normally we would wire the grid props with the current selection 
    instead of defaulting the value as I have done here */
    const emptySelection: FilterSelection = { customerName: undefined, productCategory: null };
    const customerOptions: EuiComboBoxOptionOption[] = CUSTOMERS.map((customer: string) => {
      return { label: customer };
    });

    const productOptions: EuiSelectOption[] = PRODUCTS.map((product: ProductType) => {
      return { value: product, text: product.toString() };
    });

    return (
      <div className="customer-dashboard-container" style={{ width: '100%', height: '87vh' }}>
        
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            
          <div className="filters-toolbar">

            <EuiComboBox
              aria-label="Customer Selection"
              placeholder="Select a customer"
              id='auto-complete'
              data-testid='Autocomplete'
              options={customerOptions}
              selectedOptions={[]}
            />

            <EuiSelect
              id='product-multiselect'
              data-testid='SelectControl'
              options={productOptions}
            />

            <EuiSwitch
              label='Show Delivered Orders'
              checked={true}
              onChange={() => console.log('TA DA!')}
            />
          </div>
          
          <DataGrid { ...emptySelection } />           
        </div>
      </div>
    );
  }
}

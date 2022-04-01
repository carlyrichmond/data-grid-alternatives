import React, { PureComponent } from 'react';
import './SummaryCardList.css';
import { render } from 'react-dom';
import { CustomerSummaries, CustomerSummary } from '../../../models/CustomerModel';
import SummaryCard from '../SummaryCard/SummaryCard';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';

export default class SummaryCardList extends PureComponent<any, CustomerSummaries> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      customers: [
        {
          name: 'W. E. Coyote',
          net_purchases_gbp: 14569807.98,
          item_purchase_count: 400
        },
        {
          name: 'R. Runner',
          net_purchases_gbp: 542.50,
          item_purchase_count: 10
        }
      ]
    };
  }

  renderCard(customer: CustomerSummary) {
    return <SummaryCard customer={customer} key={customer.name}/>;
  }

  render() 
  {
    return (
      <div>
        <DashboardHeader viewTitle="2022 Customer Statistics"/>
        <div className="summary-cards-container">
          {this.state.customers.map((customer: CustomerSummary) => (
          this.renderCard(customer)
        ))}
      </div>
      </div>
    )
  }
}

render(<SummaryCardList/>, document.getElementById('root'));
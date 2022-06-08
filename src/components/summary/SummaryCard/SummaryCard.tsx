import React from 'react';
import './SummaryCard.css';
import { EuiCard, EuiText } from '@elastic/eui'
import { CustomerSummary } from '../../../models/CustomerModel';
import SummaryCardChart from '../SummaryCardChart/SummaryCardChart.lazy';
import { formatBalance, formatCounts } from '../../../utils/Formatters';

interface SummaryCardProps {
  customer: CustomerSummary;
}

export default class SummaryCard extends React.Component<SummaryCardProps, Record<string, never>> {
  
  constructor(props: SummaryCardProps) {
    super(props);
  }

  render() 
  {
    return (
      <EuiCard
      className='card' 
      data-testid='SummaryCard'
      textAlign='left'
      title={this.props.customer.name}
      description='Joined January 2022'>
        <div className='card-content'>
          <SummaryCardChart/>
          <EuiText size='relative'>
            <ul>
              <li><label>{formatBalance(this.props.customer.net_purchases_gbp)}</label> <span className="descriptor">purchased</span></li>
              <li><label>{formatCounts(this.props.customer.item_purchase_count)}</label> <span className="descriptor">items purchased to date</span></li>
            </ul>
          </EuiText>
        </div>
    </EuiCard>
    )
  }
}
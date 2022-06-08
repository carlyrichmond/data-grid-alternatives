import { EuiPageHeader, EuiPageHeaderSection, EuiTitle } from '@elastic/eui';
import { faArchway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import './DashboardHeader.css';

interface DashboardHeaderProps {
  viewTitle: string;
}

const DashboardHeader: FC<DashboardHeaderProps> = (props: DashboardHeaderProps) => (
  <EuiPageHeader data-testid="DashboardHeader" alignItems="center">
    <EuiPageHeaderSection>
      <EuiTitle className='app-header' size="l">
         <h1>ACME <FontAwesomeIcon className="acme-icon" icon={faArchway}/></h1>
      </EuiTitle>
    </EuiPageHeaderSection>
    <EuiPageHeaderSection>
      <EuiTitle className='app-header' size="m">
        <h2>{props.viewTitle}</h2>
      </EuiTitle>
    </EuiPageHeaderSection>
    {/* Dummy section to force portal title to center */}
    <EuiPageHeaderSection>
    </EuiPageHeaderSection>
  </EuiPageHeader>
);

export default DashboardHeader;

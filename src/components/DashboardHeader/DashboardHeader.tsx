import { faArchway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import './DashboardHeader.css';

interface DashboardHeaderProps {
  viewTitle: string;
}

const DashboardHeader: FC<DashboardHeaderProps> = (props: DashboardHeaderProps) => (
  <div className="app-header">
    <h1>ACME <FontAwesomeIcon className="acme-icon" icon={faArchway}/></h1>
    <h2>{props.viewTitle}</h2>
  </div>
);

export default DashboardHeader;

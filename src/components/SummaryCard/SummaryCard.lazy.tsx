/* import React, { lazy, Suspense } from 'react';
import SummaryCardProps from './SummaryCard';

const LazySummaryCard = lazy(() => import('./SummaryCard'));

const SummaryCard = (props: SummaryCardProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySummaryCard customer={props.customer} {...props}/>
  </Suspense>
);

export default SummaryCard;
 */

export default {}
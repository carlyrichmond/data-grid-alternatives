import React, { lazy, Suspense } from 'react';

const LazyGroupingCustomerGrid = lazy(() => import('./GroupingCustomerGrid'));

const GroupingCustomerGrid = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGroupingCustomerGrid {...props} />
  </Suspense>
);

export default GroupingCustomerGrid;

import React, { lazy, Suspense } from 'react';

const LazyPivotTable = lazy(() => import('./PivotTable'));

const PivotTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPivotTable {...props} />
  </Suspense>
);

export default PivotTable;

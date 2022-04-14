import React, { lazy, Suspense } from 'react';

const LazyDataGrid = lazy(() => import('./DataGrid'));

const DataGrid = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDataGrid {...props} />
  </Suspense>
);

export default DataGrid;

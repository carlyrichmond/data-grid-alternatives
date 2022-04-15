import React, { lazy, Suspense } from 'react';
import { FilterSelection } from './DataGrid';

const LazyDataGrid = lazy(() => import('./DataGrid'));

const DataGrid = (props: FilterSelection) => (
  <Suspense fallback={null}>
    <LazyDataGrid {...props} />
  </Suspense>
);

export default DataGrid;

import React, { lazy, Suspense } from 'react';

const LazySameOldDataGridView = lazy(() => import('./SameOldDataGridView'));

const SameOldDataGrid = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySameOldDataGridView {...props} />
  </Suspense>
);

export default SameOldDataGrid;

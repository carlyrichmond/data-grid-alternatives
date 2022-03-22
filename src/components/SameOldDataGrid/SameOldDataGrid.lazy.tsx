import React, { lazy, Suspense } from 'react';

const LazySameOldDataGrid = lazy(() => import('./SameOldDataGrid'));

const SameOldDataGrid = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySameOldDataGrid {...props} />
  </Suspense>
);

export default SameOldDataGrid;

import React, { lazy, Suspense } from 'react';

const LazySameOldDataGridView = lazy(() => import('./SameOldDataGridView'));

const SameOldDataGrid = (props: Record<string, never>) => (
  <Suspense fallback={null}>
    <LazySameOldDataGridView {...props} />
  </Suspense>
);

export default SameOldDataGrid;

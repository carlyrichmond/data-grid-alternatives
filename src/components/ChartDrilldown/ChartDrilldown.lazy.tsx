import React, { lazy, Suspense } from 'react';

const LazyChartDrilldown = lazy(() => import('./ChartDrilldown'));

const ChartDrilldown = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChartDrilldown {...props} />
  </Suspense>
);

export default ChartDrilldown;

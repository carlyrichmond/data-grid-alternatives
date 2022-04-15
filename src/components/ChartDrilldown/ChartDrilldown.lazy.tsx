import React, { lazy, Suspense } from 'react';

const LazyChartDrilldown = lazy(() => import('./ChartDrilldown'));

const ChartDrilldown = (props: any) => (
  <Suspense fallback={null}>
    <LazyChartDrilldown {...props} />
  </Suspense>
);

export default ChartDrilldown;

import React, { lazy, Suspense } from 'react';

const LazyTimeSeriesLineChart = lazy(() => import('./TimeSeriesLineChart'));

const TimeSeriesLineChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTimeSeriesLineChart {...props} />
  </Suspense>
);

export default TimeSeriesLineChart;

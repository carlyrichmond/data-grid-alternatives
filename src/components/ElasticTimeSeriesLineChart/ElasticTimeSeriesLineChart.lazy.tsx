import React, { lazy, Suspense } from 'react';

const LazyElasticTimeSeriesLineChart = lazy(() => import('./ElasticTimeSeriesLineChart'));

const ElasticTimeSeriesLineChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyElasticTimeSeriesLineChart {...props} />
  </Suspense>
);

export default ElasticTimeSeriesLineChart;

import React, { lazy, Suspense } from 'react';

const LazyStackedProductBarChart = lazy(() => import('./StackedProductBarChart'));

const StackedProductBarChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStackedProductBarChart {...props} />
  </Suspense>
);

export default StackedProductBarChart;

import React, { lazy, Suspense } from 'react';

const LazyBarChart = lazy(() => import('./ProductBarChart'));

const ProductBarChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBarChart {...props} />
  </Suspense>
);

export default ProductBarChart;

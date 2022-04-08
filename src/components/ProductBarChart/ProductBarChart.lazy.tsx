import React, { lazy, Suspense } from 'react';
import { BaseChartProps } from '../../models/BaseProps';

const LazyBarChart = lazy(() => import('./ProductBarChart'));

const ProductBarChart = (props: BaseChartProps) => (
  <Suspense fallback={null}>
    <LazyBarChart {...props} />
  </Suspense>
);

export default ProductBarChart;

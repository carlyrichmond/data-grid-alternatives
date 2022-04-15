import React, { lazy, Suspense } from 'react';
import { BaseChartProps } from '../../models/CommonChartModels';

const LazyStackedProductBarChart = lazy(() => import('./StackedProductBarChart'));

const StackedProductBarChart = (props: BaseChartProps) => (
  <Suspense fallback={null}>
    <LazyStackedProductBarChart {...props} />
  </Suspense>
);

export default StackedProductBarChart;

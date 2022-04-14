import React, { lazy, Suspense } from 'react';
import { BaseChartProps } from '../../models/CommonChartModels';

const LazyProductColumnChart = lazy(() => import('./ProductColumnChart'));

const ProductColumnChart = (props: BaseChartProps) => (
  <Suspense fallback={null}>
    <LazyProductColumnChart {...props} />
  </Suspense>
);

export default ProductColumnChart;

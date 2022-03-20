import React, { lazy, Suspense } from 'react';

const LazySummaryCardChart = lazy(() => import('./SummaryCardChart'));

const SummaryCardChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySummaryCardChart {...props} />
  </Suspense>
);

export default SummaryCardChart;

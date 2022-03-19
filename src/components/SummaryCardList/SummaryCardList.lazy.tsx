import React, { lazy, Suspense } from 'react';

const LazySummaryCardList = lazy(() => import('./SummaryCardList'));

const SummaryCardList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySummaryCardList {...props} />
  </Suspense>
);

export default SummaryCardList;

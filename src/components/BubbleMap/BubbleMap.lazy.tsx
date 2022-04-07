import React, { lazy, Suspense } from 'react';

const LazyBubbleMap = lazy(() => import('./BubbleMap'));

const BubbleMap = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBubbleMap {...props} />
  </Suspense>
);

export default BubbleMap;

import React, { lazy, Suspense } from 'react';

const LazyGiftCardChordDiagram = lazy(() => import('./GiftCardChordDiagram'));

const GiftCardChordDiagram = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGiftCardChordDiagram {...props} />
  </Suspense>
);

export default GiftCardChordDiagram;

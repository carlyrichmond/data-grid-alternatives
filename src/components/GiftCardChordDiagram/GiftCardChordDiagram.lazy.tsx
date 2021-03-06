import React, { lazy, Suspense } from 'react';
import { BaseChartProps } from '../../models/CommonChartModels';

const LazyGiftCardChordDiagram = lazy(() => import('./GiftCardChordDiagram'));

const GiftCardChordDiagram = (props: BaseChartProps) => (
  <Suspense fallback={null}>
    <LazyGiftCardChordDiagram {...props} />
  </Suspense>
);

export default GiftCardChordDiagram;

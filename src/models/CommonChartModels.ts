import { SeriesClickCallbackFunction } from "highcharts";

export interface BaseChartProps {
  className?: string;
  isDashboardChild?: boolean;
  handleDataPointClick?: SeriesClickCallbackFunction;
}

export interface HighchartsChartState {
  chartOptions: Highcharts.Options
}
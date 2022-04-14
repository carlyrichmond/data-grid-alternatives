export interface BaseChartProps {
  className?: string;
  isDashboardChild?: boolean
}

export interface HighchartsChartState {
  chartOptions: Highcharts.Options
}
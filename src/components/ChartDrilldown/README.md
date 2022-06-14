# Chart Drilldown Example

This dashboard is a simple example containing multiple charts and grids. Powerful dashboards that give users the ability to gain useful insights from their data often contain a mixture of charts and grids. Mixing different types of controls provides users with the ability to see the underlying detail of the visualised summary data. We use three different types of control, pictured in the screenshot clockwise from left:

1. The stacked bar chart was implemented using [Highcharts](https://www.highcharts.com/).
2. A chord diagram that is built using [Nivo](https://nivo.rocks/).
3. A data grid, implemented using [AG Grid](https://www.ag-grid.com/), provides a more detailed view.

![Dashboard with Charts and Data Grid](./ChartDrilldownEvents-Looped.gif)

Many libraries also provide click event support for chart data points, which can then be used to filter the underlying data grid. This example shows the click event triggers exposed by [Highcharts](https://www.highcharts.com/) and [Nivo](https://nivo.rocks/), and how these events can be applied to [AG Grid](https://www.ag-grid.com/) programmatically using the native filtering API. 

Note in this case the use of React lifecycle events to propagate the values. Depending on your framework of choice you may need to employ a different technique.
# Oh No! Not Another Data Grid! Examples

This repository contains the accompanying examples for the talk *Oh No! Not Another Data Grid*. This talk has been presented in several forms at the following forums:

1. LJC Lightning Talks
2. Front Endgineers Meetup
3. Devoxx UK
4. Ladies of Code Glasgow

For any questions feel free to contact the author [via the handles listed on her GitHub profile](https://github.com/carlyrichmond).

## Frameworks and Tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Primarily it makes use of React class components.

Each example is accessible via a set of Elastic UI tabs. At time of writing this repository contains the following examples:

1. Sample data grid with toolbar: a typical example of grid-based dashboards from my time working in banking. [AG Grid](https://www.ag-grid.com/) is the focus point control, and in this example we make use of custom formatters and cell renderers to make use of advanced capabilities. [Elastic UI](https://elastic.github.io/) Single Select ComboBox, Single Select and Switch controls, are also presented.
2. Time Series Line Chart: a simple line chart utilising [Highcharts](https://www.highcharts.com/)
3. Product Bar Chart: a bar chart showing single category and stackable configurations using [Recharts](https://recharts.org/).
4. Summary Cards: a simple card showcasing the ability to combine visualisations with summary statistics. The line chart utilizes [Recharts](https://recharts.org/). While cards can be implemented using basic CSS and HTML, in this case I've chosen to highlight the component library [MUI](https://mui.com/) to promote reusable component libraries.
5. Grouping Data Grid: again using [AG Grid](https://www.ag-grid.com/), I show you how row grouping can be used to transform relationship related data, in this case gift card purchaser and recipient, using grouping. A similar effect for subdetails can also be achieved using the [Master/ Detail capabilities](ag-grid.com/react-data-grid/master-detail/) of many data grids, including [AG Grid](https://www.ag-grid.com/). Rather than use the [Elastic UI](https://elastic.github.io/) form controls showcased in the sample data grid example, I've showcased the Autocomplete and Select controls from [MUI](https://mui.com/) to promote reusable alternative component libraries to Elastic UI, bearing in mind that developers may need to adhere to alternative UX themes such as Material.
6. Bubble Map: although bubble charts can be used against traditional axes, they are also great against maps, such as the example included here. [Leaflet.js](https://leafletjs.com/) is a great Map library to call out, which also has a React wrapper. However, this example uses [react-simple-maps](https://www.react-simple-maps.io/) with a custom SVG marker for the data points.
7. Gift Card Chord Diagram: [Chord](https://d3-graph-gallery.com/chord), [Sankey](https://d3-graph-gallery.com/sankey) or [Network] (https://d3-graph-gallery.com/network.html) diagrams are great options for showcasing flow dependencies within networks. Chord diagrams work well for single 1-1 relationships. Meanwhile Sankey and Network diagrams can show more complicated network flows or multi-level dependencies. [D3.js](https://d3js.org/) is a great library for generating complex visualisations such as these, and the site does provide many examples. However, it has a steep learning curve making time to market for controls initially challenging. [Highcharts](https://www.highcharts.com/) is a great framework agnostic option, but for this diagram I have used [Nivo](https://nivo.rocks/) which is an incredibly powerful charting library for Reach that has loads of complex chart options.
8. Pivot Table: a simple implementation of [AG Grid](https://www.ag-grid.com/), making use of their [pivot capabilities](https://www.ag-grid.com/react-data-grid/pivoting/). Pivot controls are useful for open exploration over existing data sets. Note that pivoting is an enterprise feature, which requires a license. The control is used in evaluation mode using some of AG Grid's own sample medal data.
9. Chart With Data Grid Drilldown: powerful dashboards often contain a mixture of charts and grids. Many libraries also provide click event support for chart data points, which can then be used to filter the underlying data grid. This example shows the click event triggers exposed by [Highcharts](https://www.highcharts.com/) and [Nivo](https://nivo.rocks/), and how these events can be applied to [AG Grid](https://www.ag-grid.com/) programmatically using the native filtering API. Note in this case the use of React lifecycle events to propagate the values. Depending on your framework of choice you may need to employ a different technique.

## Getting Started

Once cloned, the project can be built locally using the following commands:

```
yarn install
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

Here are some additional resources to help you learn more on your visualisation journey.

# Focus Research

1. [Stolen Focus by Johann Hari](https://stolenfocusbook.com/)
2. [Accelerating dynamics of collective attention](https://www.nature.com/articles/s41467-019-09311-w)
3. [Can we trust the people who got us hooked on the internet to save us from it?](https://www.vox.com/the-goods/2019/4/25/18515981/google-tristan-harris-attention-economy-silicon-valley)
4. [Future Shock by Alvin Toffler](https://www.goodreads.com/book/show/466537.Future_Shock)
5. [The Managing of Organizations by Bertram M. Gross](https://www.cambridge.org/core/journals/american-political-science-review/article/abs/managing-of-organizations-by-bertram-m-gross-new-york-the-free-press-of-glencoe-1964-2-vols-pp-xxviii-971-2500/0A126A109557A7DA2E3A7862C8C319AD)
6. [Shot & Chaser: #111 Are our attention spans getting shorter?](https://open.spotify.com/episode/6oxgbLRHLHYmGWTrheqPFm?si=832342961f78471e)

### Inspiration

1. [D3 Graph Gallery](https://d3-graph-gallery.com)
2. [Data Sketches by Nadieh Bremer and Shirley Wu](https://www.datasketch.es/)
3. [Information is Beautiful by David McCandless](https://informationisbeautiful.net/)

### Libraries

#### Components

1. [MUI](https://mui.com/)- Material styled React components
2. [Angular Material](https://material.angular.io/)- Material styled Angular components
3. [Elastic UI](https://elastic.github.io/eui/#/)- UI framework of components and other features that are useful for emulating the Elastic experience. Especially useful if you want to provide a consistent experience with existing [Kibana](https://www.elastic.co/kibana/) dashboards.

### Charts

1. [Highcharts](https://www.highcharts.com/)
2. [Recharts](https://recharts.org/)
3. [Elastic Charts](https://elastic.github.io/eui/#/elastic-charts/creating-charts)
4. [Nivo](https://nivo.rocks/)
5. [D3.js](https://d3js.org/)

### Maps

1. [Leaflet.js](https://leafletjs.com/)
2. [react-simple-maps](https://www.react-simple-maps.io/)

### Grids

1. [AG Grid](https://www.ag-grid.com/)
2. [Elastic UI Tables](https://elastic.github.io/eui/#/tabular-content/tables)

### React

This project makes use of React. If you're new to React, you can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

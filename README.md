# Oh No! Not Another Data Grid! Examples

This repository contains the accompanying examples for the talk *Oh No! Not Another Data Grid*. This talk has been presented in several forms at the following forums:

1. LJC Lightning Talks

For any questions feel free to contact the author [via the handles listed on her GitHub profile](https://github.com/carlyrichmond).

## Frameworks and Tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It makes use of React class components.

At time of writing this repository contains the following examples:

1. Sample data grid with toolbar: a typical example of grid-based dashboards from my time working in banking. [AG Grid](https://www.ag-grid.com/) is the focus point control, and in this example we make use of custom formatters and cell renderers to make use of advanced capabilities. [MUI](https://mui.com/) Autocomplete and Select controls, both supporting multi-select, are also presented.
2. Time Series Line Chart: a simple line chart utilising [Highcharts](https://www.highcharts.com/)
3. Product Bar Chart: a bar chart showing single category and stackable configurations using [Recharts](https://recharts.org/).
4. Summary Cards: a simple card showcasing the ability to combine visualisations with summary statistics. The line chart utilizes [Recharts](https://recharts.org/). While cards can be implemented using basic CSS and HTML, in this case I've chosen to highlight the component library [MUI](https://mui.com/) to promote reusable component libraries.
5. Grouping Data Grid: again using [AG Grid](https://www.ag-grid.com/), I show you how row grouping can be used to transform relationship related data, in this case gift card purchaser and recipient, using grouping. A similar effect for subdetails can also be achieved using the [Master/ Detail capabilities](ag-grid.com/react-data-grid/master-detail/) of many data grids, including [AG Grid](https://www.ag-grid.com/).
6. Tree/ Bubble Chart: TODO
7. Gift Card Chord Diagram: [Chord](https://d3-graph-gallery.com/chord), [Sankey](https://d3-graph-gallery.com/sankey) or [Network] (https://d3-graph-gallery.com/network.html) diagrams are great options for showcasing flow dependencies within networks. Chord diagrams work well for single 1-1 relationships. Meanwhile Sankey and Network diagrams can show more complicated network flows or multi-level dependencies. [D3.js](https://d3js.org/) is a great library for generating complex visualisations such as these, and the site does provide many examples. However, it has a steep learning curve making time to market for controls initially challenging. [Highcharts](https://www.highcharts.com/) is a great framework agnostic option, but for this diagram I have used [Nivo](https://nivo.rocks/) which is an incredibly powerful charting library for Reach that has loads of complex chart options.
8. Pivot Table: a simple implementation of [AG Grid](https://www.ag-grid.com/), making use of their [pivot capabilities](https://www.ag-grid.com/react-data-grid/pivoting/). Pivot controls are useful for open exploration over existing data sets. Note that pivoting is an enterprise feature, which requires a license. The control is used in evaluation mode using some of AG Grid's own sample medal data.
9. Chart With Data Grid Drilldown: TODO

## Getting Started

Once cloned, the project can be built locally using the following commands:

```
npm install
npm run start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

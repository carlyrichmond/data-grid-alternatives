# Oh No! Not Another Data Grid! Examples

This repository contains the accompanying examples for the talk *Oh No! Not Another Data Grid*. This talk has been presented in several forms at the following forums:

1. LJC Lightning Talks
2. Front Endgineers Meetup
3. Devoxx UK
4. Ladies of Code Glasgow
5. HalfStack on the Thames 2022
6. Data Science Festival Summer School

Do check out the [slides](./slides/Oh%20No!%20Not%20Another%20Data%20Grid!%20Slides.pdf), [Data Science Festival slides](./slides/Data%20Science%20Festival%20Slides.pdf) which cover similar examples in [Kibana](https://www.elastic.co/kibana/), or the component READMEs for the accompanying screenshots. For any questions feel free to contact the author [via the handles listed on her GitHub profile](https://github.com/carlyrichmond).

## Frameworks and Tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Primarily it makes use of React class components.

Each example is accessible via a set of Elastic UI tabs. At time of writing this repository contains the following examples:

1. [Sample data grid with toolbar](./src/components/SameOldDataGridView/README.md): a typical example of grid-based dashboards from my time working in banking.
2. [Time Series Line Chart](./src/components/TimeSeriesLineChart/README.md): a simple line chart utilising [Highcharts](https://www.highcharts.com/).
3. [Product Bar Chart](./src/components/ProductColumnChart/README.md): a bar chart showing single category and stackable configurations using [Recharts](https://recharts.org/).
4. [Summary Cards](./src/components/summary/README.md): a simple card showcasing the ability to combine visualisations with summary statistics.
5. [Grouping Data Grid](./src/components/GroupingCustomerGrid/README.md): using row groupings to help summarise grid entries via grouping or showcase relationships in tabular data.
6. [Bubble Map](./src/components/BubbleMap/README.md): a great example of using maps to showcase data with location information.
7. [Gift Card Chord Diagram](./src/components/GiftCardChordDiagram/README.md): a great visualisation to showcase relationships between entities.
8. [Pivot Table](./src/components/PivotTable/README.md): a simple implementation of [AG Grid](https://www.ag-grid.com/), making use of their [pivot capabilities](https://www.ag-grid.com/react-data-grid/pivoting/).
9. [Chart With Data Grid Drilldown](./src/components/ChartDrilldown/README.md): an example combining data visualisations and a grid with more detailed data.

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

The idea of information overload and focus is a difficult one to prove. We often anecdotally feel that our attention spans are getting shorter. But from research it's tricky to prove. Check out some resources discussing focus, and be mindful of your own focus and wellbeing.

1. [Stolen Focus by Johann Hari](https://stolenfocusbook.com/)
2. [Accelerating dynamics of collective attention](https://www.nature.com/articles/s41467-019-09311-w)
3. [Can we trust the people who got us hooked on the internet to save us from it?](https://www.vox.com/the-goods/2019/4/25/18515981/google-tristan-harris-attention-economy-silicon-valley)
4. [Future Shock by Alvin Toffler](https://www.goodreads.com/book/show/466537.Future_Shock)
5. [The Managing of Organizations by Bertram M. Gross](https://www.cambridge.org/core/journals/american-political-science-review/article/abs/managing-of-organizations-by-bertram-m-gross-new-york-the-free-press-of-glencoe-1964-2-vols-pp-xxviii-971-2500/0A126A109557A7DA2E3A7862C8C319AD)
6. [Shot & Chaser: #111 Are our attention spans getting shorter?](https://open.spotify.com/episode/6oxgbLRHLHYmGWTrheqPFm?si=832342961f78471e)

### Inspiration

There are so many amazing resources out there to inspire your own visualisations. Here are some of my favourites!

1. [D3 Graph Gallery](https://d3-graph-gallery.com)
2. [Data Sketches by Nadieh Bremer and Shirley Wu](https://www.datasketch.es/)
3. [Information is Beautiful by David McCandless](https://informationisbeautiful.net/)

### Design Best Practices

1. [UX Collective](https://uxdesign.cc/)
2. [Don't Make Me Think: Revisited by Steve Krug](https://www.amazon.co.uk/Dont-Make-Think-Revisited-Usability/dp/0321965515)
3. [The Design of Everyday Things by Don Norman](https://www.amazon.co.uk/Design-Everyday-Things-MIT-Press/dp/0262525674)
4. [Nielsen Norman Group Articles](https://www.nngroup.com/articles/)
5. [Laws of UX](https://lawsofux.com/)
6. [WCAG Color Contrast Checker | Accessible Web](https://accessibleweb.com/color-contrast-checker/)

### Libraries

If you are looking to get started or learn more about data visualisation best practices, do check out the below resources. Not all libraries have been used within the examples in this repo, but are presented to give you options for a variety of use cases and organisations.

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

1. [AG Grid](https://www.ag-grid.com/)- note that some features require an enterprise license
2. [Elastic UI Tables](https://elastic.github.io/eui/#/tabular-content/tables)
3. [PivotTable.js](https://pivottable.js.org/examples/)- a potential open source alternative

### React

This project makes use of React. If you're new to React, you can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

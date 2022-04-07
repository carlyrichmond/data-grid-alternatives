import React, { Component } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './BubbleMap.css';

interface MarkerConfig {
  name: string, 
  coordinates: [number, number],
  fulfilledPurchaseCount: number
}

interface BubbleMapState {
  geoUrl: string,
  markerOffset: number, 
  markers: MarkerConfig[]
} 

export default class BubbleMap extends Component<any, BubbleMapState> {
  constructor(props: any | Readonly<any>) {
    super(props);

    this.state = {
      geoUrl: 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json',
      markerOffset: -5,
      markers: [
        { name: 'London', coordinates: [-0.118092, 51.509865], fulfilledPurchaseCount: 42 },
        { name: 'Edinburgh', coordinates: [-3.188267, 55.953251], fulfilledPurchaseCount: 29 },
        { name: 'Dublin', coordinates: [-6.24889, 53.33306], fulfilledPurchaseCount: 34 },
        { name: 'Barcelona', coordinates: [2.154007, 41.390205], fulfilledPurchaseCount: 48 },
        { name: 'Lisbon', coordinates: [-9.142685, 38.736946], fulfilledPurchaseCount: 30 },
        { name: 'Paris', coordinates: [2.349014, 48.864716], fulfilledPurchaseCount: 40 },
        { name: 'Florence', coordinates: [11.255814, 43.769562], fulfilledPurchaseCount: 32 },
        { name: 'Copenhagen', coordinates: [12.568337, 55.676098], fulfilledPurchaseCount: 29 },
        { name: 'Munich', coordinates: [11.576124, 48.137154], fulfilledPurchaseCount: 38 },
        { name: 'Bucharest', coordinates: [26.096306, 44.439663], fulfilledPurchaseCount: 50 },
        { name: 'Stockholm', coordinates: [18.063240, 59.334591], fulfilledPurchaseCount: 35 },
        { name: 'Helsinki', coordinates: [24.945831, 60.192059], fulfilledPurchaseCount: 25 },
        { name: 'Ankara', coordinates: [32.866287, 39.925533], fulfilledPurchaseCount: 50 },
      ]
    };
  }

  render() {
    return (
      <div className="main-panel">
        <h2 className="map-headers">Order Delivery Volumes</h2>
        <h3 className="map-headers">Number of Orders Shipped per Month</h3>
        <ComposableMap width={800} height={330}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-20.0, -52.0, 0],
          scale: 700
        }}>
          <Geographies geography={this.state.geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
          {this.state.markers.map(({ name, coordinates, fulfilledPurchaseCount }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={fulfilledPurchaseCount/4} fill='#FF3CAC' stroke='#FF3CAC' strokeWidth={2}/>
            <text y={0} textAnchor='middle' stroke='#5D5A6D' strokeWidth='0.5px' dy='.3em'
            style={{ fontFamily: 'Roboto', fontSize: '0.6em' }}>{fulfilledPurchaseCount}</text>
            <text
              textAnchor='middle'
              y={-(fulfilledPurchaseCount/4)+this.state.markerOffset}
              style={{ fontFamily: 'Open Sans', fontSize: '0.7em', fill: '#2B86C5' }}>
              {name}
            </text>
          </Marker>
        ))}
        </ComposableMap>
      </div>
    );
  }
}

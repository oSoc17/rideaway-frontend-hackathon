import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

class Map extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken:
        'pk.eyJ1IjoiYXJuYXVkd2V5dHMiLCJhIjoiY2o0cGt3d3oxMXl0cDMzcXNlbThnM3RtaCJ9.BMUyxqHH-FC69pW4U4YO9A'
    });
    /*eslint-disable react/style-prop-object*/
    return (
      <Map
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{ height: '100vh', width: '100vw' }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    );
  }
}

export default Map;

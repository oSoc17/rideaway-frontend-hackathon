import React from 'react';
import ReactMapboxGl, { Marker, Layer, GeoJSONLayer } from 'react-mapbox-gl';

import allRoutes from '../../GFR.geojson';

import icons from '../shared/icons';

const User = ({ position, bearing }) => {
  return (
    <Marker coordinates={position} anchor="bottom">
      <img
        style={{ width: 56, height: 56, transform: `rotate(${bearing}deg)` }}
        src={icons.NavBlue}
        alt="Marker"
      />
    </Marker>
  );
};

const Map = ReactMapboxGl({
  accessToken: ''
});

const lineLayout = { visibility: 'visible' };
const linePaint = {
  'line-color': {
    type: 'identity',
    property: 'colour'
  },
  'line-width': 5
};

const ConnectedMap = ({ bearing, center, zoom, setMap }) => {
  /*eslint-disable react/style-prop-object*/
  return (
    <div>
      <Map
        style="https://openmaptiles.github.io/positron-gl-style/style-cdn.json"
        containerStyle={{ height: '100vh', width: '100vw' }}
        zoom={[zoom]}
        center={center()}
        bearing={bearing}
        onStyleLoad={mapboxmap => setMap(mapboxmap)}
      >
        <GeoJSONLayer
          data={allRoutes}
          lineLayout={lineLayout}
          linePaint={linePaint}
        />
        <User position={center()} bearing={bearing} />
      </Map>
    </div>
  );
  /*eslint-enable react/style-prop-object*/
};

export default ConnectedMap;

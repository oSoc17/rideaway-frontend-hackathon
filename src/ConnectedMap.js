import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const User = ({ position }) => {
  return (
    <Marker coordinates={position} anchor="bottom">
      <img
        style={{ width: 56, height: 56 }}
        src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png"
        alt="Marker"
      />
    </Marker>
  );
};

const Map = ReactMapboxGl({
  accessToken: ''
});

const ConnectedMap = ({ bearing, center }) => {
  console.log(center());
  /*eslint-disable react/style-prop-object*/
  return (
    <Map
      style="https://openmaptiles.github.io/positron-gl-style/style-cdn.json"
      containerStyle={{ height: '70vh', width: '100vw' }}
      zoom={[13]}
      center={center()}
      bearing={bearing}
    >
      <User position={center()} />
    </Map>
  );
};

export default ConnectedMap;

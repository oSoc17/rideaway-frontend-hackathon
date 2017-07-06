import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import Controls from './Controls';

import icons from './icons';

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

class ConnectedMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      zoom: 16.5
    };
  }

  centerMap(map, center, zoom) {
    map.flyTo({ center: center(), zoom });
  }

  /*eslint-disable react/style-prop-object*/
  render() {
    const { bearing, center, navigating, changeControls } = this.props;
    const { map, zoom } = this.state;
    return (
      <div>
        <Map
          style="https://openmaptiles.github.io/positron-gl-style/style-cdn.json"
          containerStyle={{ height: '100vh', width: '100vw' }}
          zoom={[zoom]}
          center={center()}
          bearing={bearing}
          onStyleLoad={mapboxmap => this.setState({ map: mapboxmap })}
        >
          <User position={center()} bearing={bearing} />
        </Map>
        <Controls
          centerMap={() => this.centerMap(map, center, zoom)}
          navigating={navigating}
          changeControls={() => changeControls()}
        />
      </div>
    );
  }
  /*eslint-enable react/style-prop-object*/
}

export default ConnectedMap;

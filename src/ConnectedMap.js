import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

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
  /*eslint-disable react/style-prop-object*/
  render() {
    const { bearing, center } = this.props;
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
        <button
          className="btn btn-leftbottom"
          onClick={() =>
            map.flyTo({
              center: center(),
              zoom
            })}
        >
          <img
            className="icon-btn"
            src={icons.NavWhite}
            alt="navigation arrow"
          />
        </button>
        <button
          className="btn btn-rightbottom"
          onClick={() => console.log('stop')}
        />
      </div>
    );
  }
  /*eslint-enable react/style-prop-object*/
}

export default ConnectedMap;

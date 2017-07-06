import React, { Component } from 'react';
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
          containerStyle={{ height: '70vh', width: '100vw' }}
          zoom={[zoom]}
          center={center()}
          bearing={bearing}
          onStyleLoad={mapboxmap => this.setState({ map: mapboxmap })}
        >
          <User position={center()} />
        </Map>
        <button onClick={() => map.flyTo({ center: center(), zoom })}>
          CENTER
        </button>
      </div>
    );
  }
  /*eslint-enable react/style-prop-object*/
}

export default ConnectedMap;

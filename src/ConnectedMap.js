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
      map: null
    };
  }
  /*eslint-disable react/style-prop-object*/
  render() {
    const { bearing, center } = this.props;
    return (
      <div>
        <Map
          style="https://openmaptiles.github.io/positron-gl-style/style-cdn.json"
          containerStyle={{ height: '70vh', width: '100vw' }}
          zoom={[13]}
          center={center()}
          bearing={bearing}
          onStyleLoad={map => this.setState({ map })}
        >
          <User position={center()} />
        </Map>
        <button onClick={() => this.state.map.flyTo({ center: center() })}>
          CENTER
        </button>
      </div>
    );
  }
  /*eslint-enable react/style-prop-object*/
}

export default ConnectedMap;

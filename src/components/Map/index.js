import React, { Component } from 'react';

import ConnectedMap from './ConnectedMap';
import Controls from '../Controls';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      zoom: 16.5
    };
  }

  componentWillMount() {
    //this.props.startTracking();
  }

  componentWillUnmount() {
    this.props.stopTracking();
  }

  getCenter() {
    if (this.props.position) {
      const latitude = this.props.position.coords.latitude;
      const longitude = this.props.position.coords.longitude;
      return [longitude, latitude];
    } else {
      //return [-77.01239, 38.91275];
      return [4.3517, 50.8503];
    }
  }

  centerMap(map, center, zoom) {
    map.flyTo({ center, zoom });
  }

  render() {
    const { bearing } = this.props;
    const { map, zoom } = this.state;
    return (
      <div>
        <ConnectedMap
          center={() => this.getCenter()}
          bearing={bearing}
          zoom={zoom}
          setMap={mapboxmap => this.setState({ map: mapboxmap })}
        />
        <Controls
          centerMap={() => this.centerMap(map, this.getCenter(), zoom)}
        />
      </div>
    );
  }
}

export default Map;

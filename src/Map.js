import React, { Component } from 'react';

import ConnectedMap from './ConnectedMap';

class Map extends Component {
  componentWillMount() {
    this.props.startTracking();
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
      return [4.3517, 50.8503];
    }
  }

  render() {
    const { bearing } = this.props;
    return (
      <div>
        <ConnectedMap center={() => this.getCenter()} bearing={bearing} />
      </div>
    );
  }
}

export default Map;

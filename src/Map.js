import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

class Map extends Component {
  componentWillMount() {
    this.props.startTracking();
  }

  componentWillUnmount() {
    this.props.stopTracking();
  }

  getCenter() {
    let longitude = 51.5285582;
    let latitude = -0.2416815;
    if (this.props.position) {
      latitude = this.props.position.coords.latitude;
      longitude = this.props.position.coords.longitude;
    }
    return [longitude, latitude];
  }

  render() {
    const Map = ReactMapboxGl({
      accessToken: ''
    });
    /*eslint-disable react/style-prop-object*/
    return (
      <div>
        <Map
          style="https://openmaptiles.github.io/positron-gl-style/style-cdn.json"
          containerStyle={{ height: '70vh', width: '100vw' }}
          zoom={[13]}
          center={this.getCenter()}
          bearing={this.props.bearing}
        />
      </div>
    );
  }
}

export default Map;

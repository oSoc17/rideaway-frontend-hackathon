import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: null
    };
  }

  startTracking() {
    if ('geolocation' in navigator) {
      const watchPositionId = navigator.geolocation.watchPosition(
        function(position) {
          this.setState({ position });
        },
        console.warn,
        { enableHighAccuracy: true }
      );
    } else {
      alert("Sorry, your browser doesn't support geolocation!");
    }
  }

  componentDidMount() {
    this.startTracking();
  }
  render() {
    const { coords: { latitude, longitude } } = this.state.position;
    const Map = ReactMapboxGl({
      accessToken:
        'pk.eyJ1IjoiYXJuYXVkd2V5dHMiLCJhIjoiY2o0cGt3d3oxMXl0cDMzcXNlbThnM3RtaCJ9.BMUyxqHH-FC69pW4U4YO9A'
    });
    /*eslint-disable react/style-prop-object*/
    return (
      <Map
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{ height: '100vh', width: '100vw' }}
        center={[latitude, longitude]}
      />
    );
  }
}

export default Map;

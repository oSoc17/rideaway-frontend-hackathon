import React, { Component } from 'react';

import Map from './Map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      watchPositionId: 0,
      bearing: 0,
      position: null
    };
  }

  startTracking() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.onPosition);
    } else {
      alert("Sorry, your browser doesn't support geolocation!");
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this._setHeading);
    }
  }

  onPosition = position => {
    this.setState({ position });
  };

  _setHeading = e => {
    this.setState({
      userHeading: e.alpha || e.webkitCompassHeading
    });
  };

  stopTracking() {
    navigator.geolocation.clearWatch(this.state.watchPositionId);
    window.removeEventListener('deviceorientation', this._setHeading);
  }

  render() {
    const { position, bearing, watchPositionId } = this.state;
    return (
      <div className="App">
        <Map
          position={position}
          bearing={bearing}
          watchPositionId={watchPositionId}
          startTracking={() => this.startTracking()}
          stopTracking={() => this.stopTracking()}
        />
      </div>
    );
  }
}

export default App;

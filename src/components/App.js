import React, { Component } from 'react';

import Map from './Map';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      watchPositionId: 0,
      bearing: 45,
      position: null,
      navigating: false,
      browsing: true,
      destination: null,
      origin: null
    };
  }

  startTracking() {
    if ('geolocation' in navigator) {
      const watchPositionId = navigator.geolocation.watchPosition(
        this.onPosition,
        console.warn,
        { enableHighAccuracy: true }
      );
      this.setState({ watchPositionId });
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
    const {
      position,
      bearing,
      watchPositionId,
      origin,
      destination,
      navigating,
      browsing
    } = this.state;
    return (
      <div className="App">
        <Map
          position={position}
          bearing={bearing}
          watchPositionId={watchPositionId}
          startTracking={() => this.startTracking()}
          stopTracking={() => this.stopTracking()}
          changeControls={() => this.setState({ navigating: !navigating })}
          navigating={navigating}
          browsing={browsing}
          origin={origin}
          destination={destination}
        />
      </div>
    );
  }
}

export default App;

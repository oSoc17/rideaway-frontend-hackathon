import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Map from './Map';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      watchPositionId: 0,
      position: null,
      bearing: 0,
      origin: null,
      destination: null
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
      bearing: e.alpha || e.webkitCompassHeading
    });
  };

  stopTracking() {
    navigator.geolocation.clearWatch(this.state.watchPositionId);
    window.removeEventListener('deviceorientation', this._setHeading);
  }

  render() {
    const { position, bearing, origin, destination } = this.state;
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route
            path="/overview"
            render={() =>
              <Map
                position={position}
                bearing={bearing}
                origin={origin}
                destination={destination}
                startTracking={() => this.startTracking()}
                stopTracking={() => this.stopTracking()}
              />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

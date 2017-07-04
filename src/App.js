import React, { Component } from 'react';

import Map from './Map';
import './App.css';

class App extends Component {
  startTracking() {
    if ('geolocation' in navigator) {
      const watchPositionId = navigator.geolocation.watchPosition(
        function(position) {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
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
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;

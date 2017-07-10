import React, { Component } from 'react';

import icons from '../shared/icons';

import ConnectedMap from './ConnectedMap';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      zoom: props.zoom || 15
    };
  }

  componentWillMount() {
    this.props.track && this.props.startTracking();
  }

  componentWillUnmount() {
    this.props.track && this.props.stopTracking();
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

  centerMap() {
    const { map } = this.state;
    map.flyTo({ center: this.getCenter(), zoom: 15 });
  }

  renderCenterButton(center) {
    return (
      <button onClick={() => this.centerMap()} className="btn btn-center">
        <img className="icon-btn" src={icons.NavYellow} alt="center button" />
      </button>
    );
  }

  render() {
    const { bearing, track, showCenter } = this.props;
    const { zoom } = this.state;
    return (
      <div className="Map">
        <ConnectedMap
          center={() => this.getCenter()}
          bearing={bearing}
          zoom={zoom}
          track={track}
          setMap={mapboxmap => this.setState({ map: mapboxmap })}
          setZoom={zoom => this.setState({ zoom })}
        />
        {showCenter && this.renderCenterButton()}
      </div>
    );
  }
}

export default Map;

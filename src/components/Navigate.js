import React from 'react';

import Map from './Map';
import Controls from './Controls';

const Navigate = ({
  position,
  bearing,
  origin,
  destination,
  startTracking,
  stopTracking
}) => {
  return (
    <div>
      <Controls />
      <Map
        track={true}
        position={position}
        bearing={bearing}
        origin={origin}
        destination={destination}
        startTracking={() => startTracking()}
        stopTracking={() => stopTracking()}
      />
    </div>
  );
};

export default Navigate;

import React from 'react';

import icons from './shared/icons';

const renderNavControls = centerMap => {
  return (
    <div>
      <button className="btn btn-leftbottom" onClick={() => centerMap()}>
        <img className="icon-btn" src={icons.NavWhite} alt="navigation arrow" />
      </button>
      <button className="btn btn-rightbottom">
        <img className="icon-btn" src={icons.Close} alt="cross icon" />
      </button>
    </div>
  );
};

const renderRouteControls = () => {
  return (
    <div>
      <div className="infobadges">
        <div className="badge">INFO 1</div>
        <div className="badge">INFO 1</div>
        <div className="badge">INFO 1</div>
      </div>
      <button className="btn btn-center">Start</button>
    </div>
  );
};

const renderControls = centerMap => {
  return null;
};

const Controls = ({ centerMap }) => {
  return (
    <div className="Controls">
      {renderControls(centerMap)}
    </div>
  );
};

export default Controls;

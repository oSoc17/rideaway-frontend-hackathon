import React from 'react';

import icons from './shared/icons';

const renderNavControls = (centerMap, changeControls) => {
  return (
    <div>
      <button className="btn btn-leftbottom" onClick={() => centerMap()}>
        <img className="icon-btn" src={icons.NavWhite} alt="navigation arrow" />
      </button>
      <button className="btn btn-rightbottom" onClick={() => changeControls()}>
        <img className="icon-btn" src={icons.Close} alt="cross icon" />
      </button>
    </div>
  );
};

const renderRouteControls = changeControls => {
  return (
    <div>
      <div className="infobadges">
        <div className="badge">INFO 1</div>
        <div className="badge">INFO 1</div>
        <div className="badge">INFO 1</div>
      </div>
      <button className="btn btn-center" onClick={() => changeControls()}>
        Start
      </button>
    </div>
  );
};

const renderControls = (navigating, browsing, centerMap, changeControls) => {
  if (navigating) {
    return renderNavControls(centerMap, changeControls);
  } else if (browsing) {
    return undefined;
  }
  return renderRouteControls(changeControls);
};

const Controls = ({ centerMap, navigating, changeControls }) => {
  return (
    <div className="Controls">
      {renderControls(navigating, centerMap, changeControls)}
    </div>
  );
};

export default Controls;

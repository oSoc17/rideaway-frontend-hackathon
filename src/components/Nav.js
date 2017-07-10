import React from 'react';
import { NavLink } from 'react-router-dom';

import icons from './shared/icons';

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="btn-nav" to="/map/navigate">
        <img className="icon-nav" src={icons.Navigate} alt="navigate icon" />
      </NavLink>
      <NavLink className="btn-nav" to="/map/discover">
        <img className="icon-nav" src={icons.Discover} alt="discover icon" />
      </NavLink>
    </div>
  );
};

export default Nav;

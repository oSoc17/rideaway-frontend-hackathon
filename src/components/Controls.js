import React from 'react';

import SearchInput from './shared/SearchInput';
import icons from './shared/icons';

const Controls = () => {
  return (
    <div className="ctrls-top">
      <a className="hamburger">
        <img
          src={icons.Hamburger}
          alt="hamburger icon"
          className="ctrls-icon"
        />
      </a>
      <SearchInput placeholder="What is your destination?" />
    </div>
  );
};

export default Controls;

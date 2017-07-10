import React from 'react';

import './search-input.css';

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <div className="searchinput">
      <input placeholder={placeholder} className="input" />
    </div>
  );
};

export default SearchInput;

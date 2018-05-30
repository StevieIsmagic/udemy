import React from 'react';
import Assets from './Assets.js';

const Loader = props => (
  <div>
    <img 
      alt="loading..loading..."
      src = {Assets.vader}
    />
  </div>
);

export default Loader;
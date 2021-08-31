import React from 'react';
import ReactDOM from 'react-dom';

import Bird from './Components/Bird/index'

import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Bird />
  </React.StrictMode>,
  document.getElementById('root')
);


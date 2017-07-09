/**
 * Created by Sarthak on 17-06-2017.
 * Copyrights @Sarthak
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';

import LoginComponent from './ui/LoginComponent';

ReactDOM.render(
  <StyleRoot style={{ height: '100%' }}>
    <LoginComponent />
  </StyleRoot>, 
  document.getElementById('body')
);
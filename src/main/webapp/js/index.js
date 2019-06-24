/**
 * Created by Sarthak on 17-06-2017.
 * Copyrights @Sarthak
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {BrowserRouter} from 'react-router-dom';

import RootComponent from './ui/RootComponent';

ReactDOM.render(
  <StyleRoot style={{ height: '100%' }}>
    <BrowserRouter>
      <RootComponent/>
    </BrowserRouter>
  </StyleRoot>, 
  document.getElementById('root')
);
//@flow
import React from 'react';
import PropTypes from 'prop-types';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderComponent from './home/HeaderComponent';
import FooterComponent from './home/FooterComponent';
import HomeComponent from './home/HomeComponent';
import SearchComponent from './search/SearchComponent';
import AdminComponent from './admin/AdminComponent';
import ContactComponent from '../ui/ContactComponent';
import AboutUsComponent from '../ui/AboutUsComponent';
import SingleHomeComponent from './search/SingleHomeComponent';
import ErrorComponent from './home/ErrorComponent';

/**
 *
 */
export default class RootComponent extends React.Component {
  render() {
    return (
      <div>
        <div id="preloder">
          <div className="loader"></div>
        </div>

        <HeaderComponent/>

        <Switch>
          <Route path="/home" exact component={HomeComponent}/>
          <Route path="/search" component={SearchComponent}/>
          <Route path="/admin" component={AdminComponent}/>
          <Route path="/contact" component={ContactComponent}/>
          <Route path="/about" component={AboutUsComponent}/>
          <Route path="/singleHome:id" component={SingleHomeComponent}/>
          {/*<Route path="/login" component={LoginComponent}/>*/}
          {/*<AuthenticatedRoute path="/logout" component={LogoutComponent}/>*/}

          <Route component={ErrorComponent}/>
        </Switch>

        <FooterComponent/>
      </div>
    );
  }
}
/**
 * Created by Sarthak on 4/9/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../ui/common/Header';
import Footer from '../ui/common/Footer';
import HomeComponent from '../ui/HomeComponent';
import SearchComponent from '../ui/SearchComponent';
import AdminComponent from '../ui/AdminComponent';
import ContactComponent from '../ui/ContactComponent';
import AboutUsComponent from '../ui/AboutUsComponent';
import SingleHomeComponent from '../ui/common/SingleHomeComponent';
import ErrorComponent from '../ui/common/ErrorComponent';

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

        <Header/>

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

        <Footer/>
      </div>
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/**
 *
 */
export default class Header extends React.Component {

  static propTypes = {
    menuItems: PropTypes.array.required,
    selectedMenuItem: PropTypes.string.required
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo">
                <a href="/home">
                  <img src="images/only-logo.png" alt=""/>
                </a>
              </div>
              <ul className="main-menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>

                <li className="top-social">
                  <a href="#"><i className="fa fa-facebook"/></a>
                  <a href="#"><i className="fa fa-twitter"/></a>
                </li>
              </ul>
              <div id="mobile-menu-wrap"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
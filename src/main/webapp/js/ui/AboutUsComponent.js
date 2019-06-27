//@flow
import React from 'react';
import {Link} from 'react-router-dom';

/**
 *
 */
export default class AboutUsComponent extends React.Component {
  render() {
    return (
      <div>
        <section className="hero-section set-bg about-us" data-setbg="img/bg.jpg">
          <div className="container hero-text text-white">
            <h2>About Us</h2>
          </div>
        </section>
        
        <section className="about-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 about-text-warp">
                <div className="about-text">
                  <h2>Welcome to homes. The place where you can find your dream.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo aliquam lacus
                    ultrices, a feugiat urna blandit. Vivamus consequat purus eu risus tempor, sit amet rutrum
                    justo aliquet. Donec nec orci non eros aliquet blandit eu sed magna. Cras semper lacus
                    tempus nisl pretium, eu pretium dolor sollicitu-din. Nunc porttitor, libero a efficitur
                    interdum, ex mi ornare quam, at tempor tortor dui ac mi. Donec blandit sit amet est non
                    condimentum.</p>
                  <a href="#" className="site-btn a-btn">View our Listings</a>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-img">
                  <img src="img/about-img/1.jpg" alt=""/>
                    <img className="l-img" src="img/about-img/2.jpg" alt=""/>
                      <img className="r-img" src="img/about-img/3.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-title">
                  <h2><span>Meet out team</span><br />They are the best in the branch</h2>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="single-team">
                  <div className="membr-pic">
                    <img src="img/about-img/membr-1.jpg" alt=""/>
                  </div>
                  <div className="membr-info">
                    <h2>Maria Smith</h2>
                    <p>Realtor</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-team">
                  <div className="membr-pic">
                    <img src="img/about-img/membr-2.jpg" alt=""/>
                  </div>
                  <div className="membr-info">
                    <h2>Maria Smith</h2>
                    <p>Realtor</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-team">
                  <div className="membr-pic">
                    <img src="img/about-img/membr-3.jpg" alt=""/>
                  </div>
                  <div className="membr-info">
                    <h2>Maria Smith</h2>
                    <p>Realtor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="counter-section">
          <div className="container">
            <div className="b-top">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="single-counter">
                    <div className="counter-img">
                      <img src="img/counter-icon/1.png" alt=""/>
                    </div>
                    <div className="counter-info">
                      <span>350</span>
                      <p>Apartments Sold</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-counter">
                    <div className="counter-img">
                      <img src="img/counter-icon/2.png" alt=""/>
                    </div>
                    <div className="counter-info">
                      <span>1278</span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-counter">
                    <div className="counter-img">
                      <img src="img/counter-icon/3.png" alt=""/>
                    </div>
                    <div className="counter-info">
                      <span>25</span>
                      <p>Years of experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-counter">
                    <div className="counter-img">
                      <img src="img/counter-icon/4.png" alt=""/>
                    </div>
                    <div className="counter-info">
                      <span>17</span>
                      <p>Awards Wone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


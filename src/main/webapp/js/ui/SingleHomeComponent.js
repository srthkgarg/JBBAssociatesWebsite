/**
 * Created by Sarthak on 4/9/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 */
export default class SingleHomeComponent extends React.Component {
  render() {
    return (
      <div>
        <section className="hero-section set-bg single-property-r" data-setbg="images/bg.jpg">
          <div className="container hero-text text-white">
            <h2>Property Page</h2>
          </div>
        </section>
        
        <div className="filter-search">
          <div className="container ">
            <form className="filter-form">
              <div className="location">
                <p>Location</p>
                <select className="filter-location">
                  <option value="">London</option>
                  <option value="">US</option>
                  <option value="">UAE</option>
                </select>
              </div>
              <div className="search-type">
                <p>Property Type</p>
                <select className="filter-property">
                  <option value="">House</option>
                  <option value="">Resort</option>
                  <option value="">Hotel</option>
                </select>
              </div>
              <div className="price-range">
                <p>Price</p>
                <div className="range-slider">
                  <div id="slider-range">
                            <span tabIndex="0"
                                  className="ui-slider-handle ui-corner-all ui-state-default slider-left">50k</span>
                    <span tabIndex="0"
                          className="ui-slider-handle ui-corner-all ui-state-default slider-right">300k</span>
                  </div>
                </div>
              </div>
              <div className="bedrooms">
                <p>Bedrooms</p>
                <div className="room-filter-pagi">
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-1"/>
                      <label htmlFor="room-1">1</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-2"/>
                      <label htmlFor="room-2">2</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-3"/>
                      <label htmlFor="room-3">3</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="room" id="room-4"/>
                      <label htmlFor="room-4">4+</label>
                  </div>
                </div>
              </div>
              <div className="bathrooms">
                <p>Bathrooms</p>
                <div className="room-filter-pagi">
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-1"/>
                      <label htmlFor="bathroom-1">1</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-2"/>
                      <label htmlFor="bathroom-2">2</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-3"/>
                      <label htmlFor="bathroom-3">3</label>
                  </div>
                  <div className="bf-item">
                    <input type="radio" name="bathroom" id="bathroom-4"/>
                      <label htmlFor="bathroom-4">4+</label>
                  </div>
                </div>
              </div>
              <div className="search-btn">
                <button type="submit"><i className="flaticon-search"/>Search</button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="single-property">
          <div className="container">
            <div className="row spad-p">
              <div className="col-lg-12">
                <div className="property-title">
                  <h3>Country Style House with beautiful garden and terrace</h3>
                  <a href="#"><i className="fa flaticon-placeholder"/> London, 76 Guild Street, EC3P 3WF</a>
                </div>
                <div className="property-price">
                  <p>For Sale</p>
                  <span>$345,000</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="property-img owl-carousel">
                  <div className="single-img">
                    <img src="images/single-property/1.jpg" alt=""/>
                  </div>
                  <div className="single-img">
                    <img src="images/single-property/2.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="property-details">
          <div className="container">
            <div className="row sp-40 spt-40">
              <div className="col-lg-8">
                <div className="p-ins">
                  <div className="row details-top">
                    <div className="col-lg-12">
                      <div className="t-details">
                        <div className="register-id">
                          <p>Registered ID: <span>0D05426FF1</span></p>
                        </div>
                        <div className="popular-room-features single-property">
                          <div className="size">
                            <p>Lot Size</p>
                            <img src="images/rooms/size.png" alt=""/>
                              <i className="flaticon-bath"/>
                              <span>2561 sqft</span>
                          </div>
                          <div className="beds">
                            <p>Beds</p>
                            <img src="images/rooms/bed.png" alt=""/>
                              <span>9</span>
                          </div>
                          <div className="baths">
                            <p>Baths</p>
                            <img src="images/rooms/bath.png" alt=""/>
                              <span>2</span>
                          </div>
                          <div className="garage">
                            <p>Garage</p>
                            <img src="images/rooms/garage.png" alt=""/>
                              <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="property-description">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in justo
                          elementum,fermentum justo ac, rutrum erat. Aenean ut malesuada diam. Proin
                          bibendum
                          sapien sodales, convallis dolor facilisis, ultricies nisl. Sed malesuada nibh
                          sed
                          velit ultricies, id varius lacus feugiat. Aenean vestibulum, nisl eget accumsan
                          aliquam, magna diam convallis risus, in tristique metus sem eu tortor. Cras leo
                          libero, fermentum quis aliquam et, tincidunt at dolor. </p>
                      </div>
                      <div className="property-features">
                        <h4>Property Features</h4>
                        <div className="property-table">
                          <table>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Home theater</td>
                              <td><img src="images/check.png" alt=""/> Carpeting</td>
                              <td><img src="images/check.png" alt=""/> Attic fans</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Media room</td>
                              <td><img src="images/check.png" alt=""/> Concrete</td>
                              <td><img src="images/check.png" alt=""/> Ceiling fans</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Family room</td>
                              <td><img src="images/check.png" alt=""/> Bamboo</td>
                              <td><img src="images/check.png" alt=""/> Thermostats</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Gym/workout room</td>
                              <td><img src="images/check.png" alt=""/> Stone</td>
                              <td><img src="images/check.png" alt=""/> Single flush toilets</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Library</td>
                              <td><img src="images/check.png" alt=""/> Tile</td>
                              <td><img src="images/check.png" alt=""/> Window shutters</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Butler's pantry</td>
                              <td><img src="images/check.png" alt=""/> Laminate</td>
                              <td><img src="images/check.png" alt=""/> Solar heat</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Sunroom</td>
                              <td><img src="images/check.png" alt=""/> Cork</td>
                              <td><img src="images/check.png" alt=""/> Solar plumbing</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Downstairs's bedroom</td>
                              <td><img src="images/check.png" alt=""/> Vinyl / linoleum</td>
                              <td><img src="images/check.png" alt=""/> Solar Screens</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Basement</td>
                              <td><img src="images/check.png" alt=""/> Manufactured wood</td>
                              <td><img src="images/check.png" alt=""/> Storm windows</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Guest quarters</td>
                              <td><img src="images/check.png" alt=""/> Marble</td>
                              <td><img src="images/check.png" alt=""/> Tankless water heater</td>
                            </tr>
                            <tr>
                              <td><img src="images/check.png" alt=""/> Wine storage</td>
                              <td><img src="images/check.png" alt=""/> Wood</td>
                              <td><img src="images/check.png" alt=""/> Skylights or sky tubes</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="location-map">
                        <h4>Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107002.020096289!2d-96.80666618302782!3d33.06138629992991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x62aa036489cd602b!2sPlano%2C+TX%2C+USA!5e0!3m2!1sen!2sbd!4v1558246953339!5m2!1sen!2sbd" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row pb-30">
                  <div className="col-lg-12">
                    <div className="contact-service">
                      <img src="images/single-property/small.png" alt="" />
                        <p>Listed by</p>
                        <h5>Oliver G Harris</h5>
                        <table>
                          <tr>
                            <td>Office : <span>1-139-954-3228</span></td>
                          </tr>
                          <tr>
                            <td>Mobile : <span>1-517-328-7751</span></td>
                          </tr>
                          <tr>
                            <td>Fax : <span>1-458-284-9871</span></td>
                          </tr>
                          <tr>
                            <td>WhatsApp : <span>1-812-117-2663</span></td>
                          </tr>
                          <tr>
                            <td>Email : <span>oliver@homes.com</span></td>
                          </tr>
                        </table>
                        <a href="#" className="site-btn list-btn">View More Listings</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="room-items">
                      <div className="room-img set-bg" data-setbg="images/rooms/4.jpg">
                        <a href="#" className="room-content">
                          <i className="flaticon-heart"/>
                        </a>
                      </div>
                      <div className="room-text">
                        <div className="room-details">
                          <div className="room-title">
                            <h5>Country Style House with beautiful garden and terrace</h5>
                            <a href="#">
                              <i className="flaticon-placeholder"/>
                              <span>Location</span>
                            </a>
                            <a href="#" className="large-width">
                              <i className="flaticon-cursor"/> 
                              <span>Show on Map</span>
                            </a>
                          </div>
                        </div>
                        <div className="room-features">
                          <div className="room-info">
                            <div className="size">
                              <p>Lot Size</p>
                              <img src="images/rooms/size.png" alt=""/>
                                <i className="flaticon-bath"/>
                                <span>2561 sqft</span>
                            </div>
                            <div className="beds">
                              <p>Beds</p>
                              <img src="images/rooms/bed.png" alt=""/>
                                <span>9</span>
                            </div>
                            <div className="baths">
                              <p>Baths</p>
                              <img src="images/rooms/bath.png" alt=""/>
                                <span>2</span>
                            </div>
                            <div className="garage">
                              <p>Garage</p>
                              <img src="images/rooms/garage.png" alt=""/>
                                <span>1</span>
                            </div>
                          </div>
                        </div>
                        <div className="room-price">
                          <p>For Sale</p>
                          <span>$345,000</span>
                        </div>
                        <a href="#" className="site-btn btn-line">View Property</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
//@flow
import React from 'react';
import {Link} from 'react-router-dom';

/**
 *
 */
export default class SearchComponent extends React.Component {
  render() {
    return (
      <div>
        <section className="hero-section set-bg search-result" data-setbg="img/bg.jpg">
          <div className="container hero-text text-white">
            <h2>Search Results</h2>
          </div>
        </section>

        <div className="filter-search search-opt">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
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
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default slider-left">50k</span>
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
          </div>
        </div>

        <div className="map-section">
          <div className="container-fluid">
            <div className="row">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107002.020096289!2d-96.80666618302782!3d33.06138629992991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x62aa036489cd602b!2sPlano%2C+TX%2C+USA!5e0!3m2!1sen!2sbd!4v1558246953339!5m2!1sen!2sbd"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

        <section className="hotel-rooms spad-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-45">
                <div className="found-items">
                  <h4>We found <span>6</span> properties</h4>
                  <select className="date-select">
                    <option value="0">Date New to Old</option>
                    <option value="1">Old</option>
                    <option value="2">New</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="img/rooms/1.jpg">
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
                          <img src="img/rooms/size.png" alt=""/>
                          <i className="flaticon-bath"/>
                          <span>2561 sqft</span>
                        </div>
                        <div className="beds">
                          <p>Beds</p>
                          <img src="img/rooms/bed.png" alt=""/>
                          <span>9</span>
                        </div>
                        <div className="baths">
                          <p>Baths</p>
                          <img src="img/rooms/bath.png" alt=""/>
                          <span>2</span>
                        </div>
                        <div className="garage">
                          <p>Garage</p>
                          <img src="img/rooms/garage.png" alt=""/>
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
              <div className="col-lg-4 col-md-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="img/rooms/2.jpg">
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
                          <img src="img/rooms/size.png" alt=""/>
                          <i className="flaticon-bath"/>
                          <span>2561 sqft</span>
                        </div>
                        <div className="beds">
                          <p>Beds</p>
                          <img src="img/rooms/bed.png" alt=""/>
                          <span>9</span>
                        </div>
                        <div className="baths">
                          <p>Baths</p>
                          <img src="img/rooms/bath.png" alt=""/>
                          <span>2</span>
                        </div>
                        <div className="garage">
                          <p>Garage</p>
                          <img src="img/rooms/garage.png" alt=""/>
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
              <div className="col-lg-4 col-md-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="img/rooms/3.jpg">
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
                          <img src="img/rooms/size.png" alt=""/>
                          <i className="flaticon-bath"/>
                          <span>2561 sqft</span>
                        </div>
                        <div className="beds">
                          <p>Beds</p>
                          <img src="img/rooms/bed.png" alt=""/>
                          <span>9</span>
                        </div>
                        <div className="baths">
                          <p>Baths</p>
                          <img src="img/rooms/bath.png" alt=""/>
                          <span>2</span>
                        </div>
                        <div className="garage">
                          <p>Garage</p>
                          <img src="img/rooms/garage.png" alt=""/>
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
              <div className="col-lg-4 col-md-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="img/rooms/4.jpg">
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
                          <img src="img/rooms/size.png" alt=""/>
                          <i className="flaticon-bath"/>
                          <span>2561 sqft</span>
                        </div>
                        <div className="beds">
                          <p>Beds</p>
                          <img src="img/rooms/bed.png" alt=""/>
                          <span>9</span>
                        </div>
                        <div className="baths">
                          <p>Baths</p>
                          <img src="img/rooms/bath.png" alt=""/>
                          <span>2</span>
                        </div>
                        <div className="garage">
                          <p>Garage</p>
                          <img src="img/rooms/garage.png" alt=""/>
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
              <div className="col-lg-4 col-md-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="img/rooms/5.jpg">
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
                          <img src="img/rooms/size.png" alt=""/>
                          <i className="flaticon-bath"/>
                          <span>2561 sqft</span>
                        </div>
                        <div className="beds">
                          <p>Beds</p>
                          <img src="img/rooms/bed.png" alt=""/>
                          <span>9</span>
                        </div>
                        <div className="baths">
                          <p>Baths</p>
                          <img src="img/rooms/bath.png" alt=""/>
                          <span>2</span>
                        </div>
                        <div className="garage">
                          <p>Garage</p>
                          <img src="img/rooms/garage.png" alt=""/>
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
              <div className="col-lg-4 col-md-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="img/rooms/6.jpg">
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
                          <img src="img/rooms/size.png" alt=""/>
                          <i className="flaticon-bath"/>
                          <span>2561 sqft</span>
                        </div>
                        <div className="beds">
                          <p>Beds</p>
                          <img src="img/rooms/bed.png" alt=""/>
                          <span>9</span>
                        </div>
                        <div className="baths">
                          <p>Baths</p>
                          <img src="img/rooms/bath.png" alt=""/>
                          <span>2</span>
                        </div>
                        <div className="garage">
                          <p>Garage</p>
                          <img src="img/rooms/garage.png" alt=""/>
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
        </section>
      </div>
    );
  }
}


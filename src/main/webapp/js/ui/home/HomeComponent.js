/**
 * Created by Sarthak on 4/9/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import DropDown from '../common/DropDown';

import LocationType from '../../enums/LocationType';
import PropertySaleType from '../../enums/PropertySaleType';
import PropertyType from '../../enums/PropertyType';

/**
 *
 */
export default class HomeComponent extends React.Component {

  static propTypes = {

  };

  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {

    };

    //binding locally used functions here.
    this.onSearchCLick().bind(this);
  }

  /**
   *
   */
  onSearchCLick() {

  }

  /**
   *
   */
  render() {
    return (
      <div>
        <section className="hero-section home-page set-bg"
                 style={{ backgroundImage: "images/bg.jpg" }}>
          <div className="container hero-text text-white">
            <h2>Find your next</h2>
            <h2>dream home.</h2>
          </div>
        </section>

        {/* Filter Search Section Begin */}
        <div className="filter-search">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <form className="filter-form">
                  <div className="location">
                    <p>Location</p>
                    <DropDown options={LocationType.toArray()} className="filter-location" />
                  </div>
                  <div className="search-type">
                    <p>Purchase Type</p>
                    <DropDown options={PropertySaleType.toArray()} className="filter-property" />
                  </div>
                  <div className="search-type">
                    <p>Property Type</p>
                    <DropDown options={PropertyType.toArray()} className="filter-property" />
                  </div>
                  <div className="price-range">
                    <p>Price</p>
                    <div className="range-slider">
                      <div id="slider-range">
                        <div tabIndex="0"
                             className="ui-slider-handle ui-corner-all ui-state-default slider-left">50k
                        </div>
                        <div tabIndex="1"
                             className="ui-slider-handle ui-corner-all ui-state-default slider-right">300k
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bedrooms">
                    <p>Bedrooms</p>
                    <div className="room-filter-pagi">
                      <div className="bf-item">
                        <input type="radio" name="room"/>
                        <label htmlFor="room-1">1</label>
                      </div>
                      <div className="bf-item">
                        <input type="radio" name="room"/>
                        <label htmlFor="room-2">2</label>
                      </div>
                      <div className="bf-item">
                        <input type="radio" name="room"/>
                        <label htmlFor="room-3">3</label>
                      </div>
                      <div className="bf-item">
                        <input type="radio" name="room"/>
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
        {/* Filter Search Section End */}
        {/* Hotel Room Section Begin */}
        <section className="hotel-rooms spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="images/rooms/1.jpg">
                    <a href="#" className="room-content">
                      <i className="flaticon-heart"/>
                    </a>
                  </div>
                  <div className="room-text">
                    <div className="room-details">
                      <div className="room-title">
                        <h5>Country Style House with beautiful garden and terrace</h5>
                        <a href="#"><i className="flaticon-placeholder"/>
                          <span>Location</span>
                        </a>
                        <a href="#" className="large-width"><i className="flaticon-cursor"/>
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
              <div className="col-lg-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="images/rooms/2.jpg">
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
              <div className="col-lg-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="images/rooms/3.jpg">
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
              <div className="col-lg-4 col-md-6">
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
              <div className="col-lg-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="images/rooms/5.jpg">
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
              <div className="col-lg-4 col-md-6">
                <div className="room-items">
                  <div className="room-img set-bg" data-setbg="images/rooms/6.jpg">
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
        </section>
        {/* Hotel Room Section End */}
        {/* Popular Room Section Begin */}
        <section className="popular-room set-bg p-in" data-setbg="images/bg-2.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="slider-active owl-carousel">
                  <div className="popular-items">
                    <div className="popular-room-text">
                      <div className="popular-room-details">
                        <div className="popular-room-title">
                          <h5>Spacious Modern Smart House</h5>
                          <a href="#">
                            <i className="flaticon-placeholder"/>
                            <span>Location</span>
                          </a>
                          <a href="#">
                            <i className="flaticon-cursor"/>
                            <span>Show on Map</span>
                          </a>
                        </div>
                      </div>
                      <div className="popular-room-description">
                        <div className="popular-room-desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales
                            commodo ex sed pellentesque. Aliquam vitae purus sed dolor hendrerit
                            vehicula imperdiet sed justo. magna.</p>
                        </div>
                      </div>
                      <div className="popular-room-features">
                        <div className="popular-room-info">
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
                      <div className="popular-room-price">
                        <p>For Sale</p>
                        <span>$345,000</span>
                        <span className="deal">Best Deal</span>
                      </div>
                      <a href="#" className="site-btn btn-line">View Property</a>
                    </div>
                  </div>
                  <div className="popular-items">
                    <div className="popular-room-text">
                      <div className="popular-room-details">
                        <div className="popular-room-title">
                          <h5>Spacious Modern Smart House</h5>
                          <a href="#">
                            <i className="flaticon-placeholder"/>
                            <span>Location</span>
                          </a>
                          <a href="#">
                            <i className="flaticon-cursor"/>
                            <span>Show on Map</span>
                          </a>
                        </div>
                      </div>
                      <div className="popular-room-description">
                        <div className="popular-room-desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales
                            commodo ex sed pellentesque. Aliquam vitae purus sed dolor hendrerit
                            vehicula imperdiet sed justo. magna.</p>
                        </div>
                      </div>
                      <div className="popular-room-features">
                        <div className="popular-room-info">
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
                      <div className="popular-room-price">
                        <p>For Sale</p>
                        <span>$345,000</span>
                        <span className="deal">Best Deal</span>
                      </div>
                      <a href="#" className="site-btn btn-line">View Property</a>
                    </div>
                  </div>
                  <div className="popular-items">
                    <div className="popular-room-text">
                      <div className="popular-room-details">
                        <div className="popular-room-title">
                          <h5>Spacious Modern Smart House</h5>
                          <a href="#">
                            <i className="flaticon-placeholder"/>
                            <span>Location</span>
                          </a>
                          <a href="#">
                            <i className="flaticon-cursor"/>
                            <span>Show on Map</span>
                          </a>
                        </div>
                      </div>
                      <div className="popular-room-description">
                        <div className="popular-room-desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales
                            commodo ex sed pellentesque. Aliquam vitae purus sed dolor hendrerit
                            vehicula imperdiet sed justo. magna.</p>
                        </div>
                      </div>
                      <div className="popular-room-features">
                        <div className="popular-room-info">
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
                      <div className="popular-room-price">
                        <p>For Sale</p>
                        <span>$345,000</span>
                        <span className="deal">Best Deal</span>
                      </div>
                      <a href="#" className="site-btn btn-line">View Property</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Room Section End */}
        {/* Newslatter Section Begin */}
        <section className="newslatter-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="newslatter-text">
                  <img src="images/message.png" alt=""/>
                  <h4>Join our mailing to get weekly updates on <br/>our exclusive deals.</h4>
                  <form>
                    <input type="text" placeholder="Email address"/>
                    <button type="submit" className="site-btn news-btn">Subscribe!</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Newslatter Section End */}
        {/* Servies Section Begin */}
        <section className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="left-side">
                  <h2><span>Why choose homes?</span><br/>Because we we are the best in <br/>br>the business.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id est nec nisl tristique
                    dignissim semper sed diam. Donec vulputate neque in massa hendrerit, non dignissim ipsum
                    varius. Mauris dignissim libero ipsum, nec molestie nulla molestie at. Nam imperdiet
                    hendrerit finibus. Sed porttitor ultricies sagittis. Nullam lobortis nec quam vitae
                    venenatis. </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-side">
                  <ul>
                    <li>
                      <img src="images/check.png" alt=""/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      <img src="images/check.png" alt=""/>Praesent tincidunt diam in ante faucibus tristique.
                    </li>
                    <li>
                      <img src="images/check.png" alt=""/>Vivamus id nisl sed mi varius lobortis.
                    </li>
                    <li>
                      <img src="images/check.png" alt=""/>Suspendisse sit amet erat placerat, molestie neque id
                    </li>
                    <li>
                      <img src="images/check.png" alt=""/>Fusce pretium libero sit amet ipsum posuere pretium.
                    </li>
                    <li>
                      <img src="images/check.png" alt=""/>Praesent tincidunt diam in ante faucibus tristique.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Servies Section End */}
        <section className="instagram">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Don’t forget to follow us on Instagram @jbb-associates</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
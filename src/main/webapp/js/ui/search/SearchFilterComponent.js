/**
 * Created by Sarthak on 4/9/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LocationType from '../../enums/LocationType';
import PropertySaleType from '../../enums/PropertySaleType';
import PropertyType from '../../enums/PropertyType';

/**
 *
 */
export default class SingleHomeComponent extends React.Component {
  render() {
    return (
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
    );
  }
}
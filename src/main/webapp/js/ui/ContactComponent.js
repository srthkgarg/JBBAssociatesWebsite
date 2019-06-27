//@flow
import React from 'react';
import {Link} from 'react-router-dom';

/**
 * 
 */
export default class ContactComponent extends React.Component {
  render() {
    return (
      <div>
        <section className="hero-section set-bg about-us" data-setbg="img/bg.jpg">
          <div className="container hero-text text-white">
            <h2>Contact</h2>
          </div>
        </section>

        <div className="map-section">
          <div className="container-fluid">
            <div className="row">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107002.020096289!2d-96.80666618302782!3d33.06138629992991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x62aa036489cd602b!2sPlano%2C+TX%2C+USA!5e0!3m2!1sen!2sbd!4v1558246953339!5m2!1sen!2sbd" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="contact-form">
                  <h4>Get in Touch</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" className="name" placeholder="Name" required/>
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="Email" required/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <input type="text" placeholder="Subject" required/>
                          <textarea placeholder="Message" required/>
                          <button className="site-btn c-btn">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info">
                  <h4>Contact Details</h4>
                  <ul className="contact-addr">
                    <li><i className="flaticon-placeholder"/><span>B-21, Tagore road, Adarsh Nagar, Delhi - 33, India</span>
                    </li>
                    <li><i className="flaticon-envelope"/><span>rajeshgupta.jbbassociates@gmail.com</span></li>
                    <li><i className="flaticon-smartphone"/><span>+91-9971980190</span></li>
                  </ul>
                  <p>Monday – Sunday: 10 am – 7 pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


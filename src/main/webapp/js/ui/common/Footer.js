import React from 'react';

/**
 *
 */
export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer-section">
        {/* Rooms Pic Section Begin*/}
        <div className="room-pic">
          <div className="container-fluid">
            <div className="row sp-40">
              <img src="images/room-pic/1.jpg" alt=""/>
              <img src="images/room-pic/2.jpg" alt=""/>
              <img src="images/room-pic/3.jpg" alt=""/>
              <img src="images/room-pic/4.jpg" alt=""/>
              <img src="images/room-pic/5.jpg" alt=""/>
            </div>
          </div>
        </div>
        {/* Rooms Pic Section End */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center sp-60">
              <img src="images/only-logo.png" alt=""/>
            </div>
          </div>
          <div className="row p-37">
            <div className="col-lg-4">
              <div className="about-footer">
                <h5>About JBB Associates</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend tristique venenatis.
                  Maecenas a rutrum tellus nam vel semper nibh.</p>
                <div className="footer-social">
                  <a href="#">
                    <i className="fa fa-facebook"/>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-blog">
                <h5>Latest Blog Posts</h5>

                <div className="single-blog">
                  <div className="lt-side">
                    <img src="images/footer-blog-1.jpg" alt=""/>
                  </div>
                  <div className="rt-side">
                    <h6>How to find the perfect area for<br/> your next home.</h6>
                    <div className="blog-time">
                      <i className="flaticon-clock"/>
                      <span>5 min</span>
                    </div>
                    <a href="#" className="read-more">
                      <i className="flaticon-right-arrow-1"/>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
                <div className="single-blog">
                  <div className="lt-side">
                    <img src="images/footer-blog-2.jpg" alt=""/>
                  </div>
                  <div className="rt-side">
                    <h6>How to find the perfect area for<br/> your next home.</h6>
                    <div className="blog-time">
                      <i className="flaticon-clock"/>
                      <span>5 min</span>
                    </div>
                    <a href="#" className="read-more">
                      <i className="flaticon-right-arrow-1"/>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-address">
                <h5>Get In Touch</h5>
                <ul>
                  <li>
                    <i className="flaticon-placeholder"/>
                    <span>B-21, Tagore Road, Adarsh Nagar, Delhi - 110033, India</span>
                  </li>
                  <li>
                    <i className="flaticon-envelope"/>
                    <span>rajeshgupta.jbbassociates@gmail.com</span>
                  </li>
                  <li>
                    <i className="flaticon-smartphone"/>
                    <span>+91-9868584946</span>
                  </li>
                </ul>
                <p>Monday – Sunday: 10 am – 7 pm</p>
              </div>
            </div>
          </div>

          <div className="row p-20">
            <div className="col-lg-12 text-center">
              <div className="copyright">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This web application is made with <i className="fa fa-heart-o"
                                                                           aria-hidden="true"/> by
                <a href="https://colorlib.com" target="_blank">JBB Associates</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
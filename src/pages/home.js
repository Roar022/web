import React , { Fragment } from 'react';
// import Menu from './menu';
import { Link } from "react-router-dom";
// import { setupMenu, setupSwiper, setupLoadMore } from '../Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();
// Use the imported functions in your code


function Home(){
  
  return (
    <Fragment>
    {/* <Menu /> */}
    
<section className="header">
        <a to="home.html" className="logo">Safar</a>

        <nav className="navbar">
        {/* <Link to="/">Home</Link>
         <Link to="/about">About</Link> */}
        {/* <Link to="/package">Package</Link>
        <Link to="/book">Book</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/Home.html">Home</Link>  */}
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/package">package</Link>
          <Link to="/book" style={{ color: "#8e44ad" }}>book</Link>
          <Link to="/gallery">Gallery</Link>
          <a target="_blank" href="Assets/Sign-up/sign-up.html" className="btn" style={{ color: 'white' }}>SignUp</a>

        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

        <div id="menu-btn" className="fas fa-bars" />
      </section>

        {/* <section /> */}

        <section className="home">
          <div className="swiper home-slider">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide slide"
                style={{ background: "url(Assets/Images/trvl1.jpg) no-repeat" }}
              >
                <div className="content">
                
                  <span>explore, discover, travel</span>
                  <h3>travel around the world</h3>
                  <a to="package.html" className="btn">
                    discover more
                  </a>
                </div>
              </div>

              <div
                className="swiper-slide slide"
                style={{ background: "url(Assets/Images/home-slide-2.jpg) no-repeat" }}
              >
                <div className="content">
                  <span>explore, discover, travel</span>
                  <h3>discover new places</h3>
                  <a to="package.html" className="btn">
                    discover more
                  </a>
                </div>
              </div>

              <div
                className="swiper-slide slide"
                style={{ background: "url(Assets/Images/home-slide-1.jpg) no-repeat" }}
              >
                <div className="content">
                  <span>explore, discover, travel</span>
                  <h3>make your tour worthwhile</h3>
                  <a to="package.html" className="btn">
                    discover more
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </section>

        <section className="services">
          <h1 className="heading-title">our services</h1>
          <div className="box-container">
            <div className="box">
              <img src="Assets/icons/mount100.png" alt="" />
              <h3>adventure</h3>
            </div>

            <div className="box">
              <img src="Assets/icons/guide100.png" alt="" />
              <h3>tour guide</h3>
            </div>

            <div className="box">
              <img src="Assets/icons/trek100.png" alt="" />
              <h3>trekking</h3>
            </div>

            <div className="box">
              <img src="Assets/icons/fire100.png" alt="" />
              <h3>camp fire</h3>
            </div>

            <div className="box">
              <img src="Assets/icons/offroad100.png" alt="" />
              <h3>off road</h3>
            </div>

            <div className="box">
              <img src="Assets/icons/camp100.png" alt="" />
              <h3>camping</h3>
            </div>
          </div>
        </section>

        <section className="home-about">
          <div className="image">
            <img src="Assets/Images/about.jpg" alt="" />
          </div>
          <div className="content">
            <h3>about us</h3>
            <p>
              Welcome to our tourism website Safar We are a team of travel
              enthusiasts who believe that the best way to experience a new
              culture or destination is through immersive and personalized travel
              packages. Our goal is to provide you with a memorable and authentic
              travel experience that is tailored to your preferences.
            </p>
            <a to="about.html" className="btn">
              read more
            </a>
          </div>
        </section>

        <section className="home-packages">
          <h1 className="heading-title">our packages</h1>
          <div className="box-container">
            <div className="box">
              <div className="image">
                <img src="Assets/Images/img-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>BUSINESS TOURISM PACKAGES</h3>
                <p>
                  These packages are designed for people who travel for business
                  purposes. They include services such as meeting facilities,
                  accommodations, and transportation.
                </p>
                <a to="book.html" className="btn">
                  book now
                </a>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="Assets/Images/img-2.jpg" alt="" />
              </div>
              <div className="content">
                <h3>LEISURE TOURISM PACKAGES</h3>
                <p>
                  These packages are designed for people who want to relax and
                  have fun on their vacations. They include activities such as
                  sightseeing, beach vacations,
                </p>
                <a to="book.html" className="btn">
                  book now
                </a>
              </div>
            </div>

            <div className="box">
              <div className="image">
                <img src="Assets/Images/img-3.jpg" alt="" />
              </div>
              <div className="content">
                <h3>ECO-TOURISM PACKAGES</h3>
                <p>
                  These packages are designed for people who are interested in
                  preserving the natural environment while traveling. They
                  include activities such as hiking, wildlife tours, and
                  eco-friendly accommodations.
                </p>
                <a to="book.html" className="btn">
                  book now
                </a>
              </div>
            </div>
          </div>
          <div className="load-more">
            <a to="package.html" className="btn">
              load more
            </a>
          </div>
        </section>

        <section className="home-offer">
          <div className="content">
            <h3>upto 50% off</h3>
            <p>
              Ready to explore the world without breaking the bank? Take
              advantage of our limited time offer and get 50% off on your dream
              vacation!
            </p>
            <a to="book.html" className="btn">
              book now
            </a>
          </div>
        </section>

        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>quick links</h3>
              <a to="home.html">
                <i className="fas fa-angle-right"></i>home
              </a>
              <a to="about.html">
                <i className="fas fa-angle-right"></i>about
              </a>
              <a to="package.html">
                <i className="fas fa-angle-right"></i>package
              </a>
              <a to="book.html">
                <i className="fas fa-angle-right"></i>book
              </a>
              <a to="gallery.html">
                <i className="fas fa-angle-right"></i>gallery
              </a>
            </div>

            <div className="box">
              <h3>extra links</h3>
              <a to="#">
                <i className="fas fa-angle-right"></i>ask questions
              </a>
              <a to="#">
                <i className="fas fa-angle-right"></i>about us
              </a>
              <a to="#">
                <i className="fas fa-angle-right"></i>privacy policy
              </a>
              <a to="#">
                <i className="fas fa-angle-right"></i>terms of use
              </a>
            </div>

            <div className="box">
              <h3>Contact Info</h3>
              <a to="#">
                <i className="fas fa-phone"></i> +123-456-7890
              </a>
              <a to="#">
                <i className="fas fa-phone"></i> +111-222-3333
              </a>
              <a to="#">
                <i className="fas fa-envelope"></i> autocrats@gmail.com{" "}
              </a>
              <a to="#">
                <i className="fas fa-map"></i> Lucknow , india - 222001{" "}
              </a>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a to="#">
                <i className="fab fa-facebook-f"></i> facebook{" "}
              </a>
              <a to="#">
                <i className="fab fa-twitter"></i> twitter{" "}
              </a>
              <a to="#">
                <i className="fab fa-instagram"></i> instagram{" "}
              </a>
              <a to="#">
                <i className="fab fa-linkedin"></i> linkedin{" "}
              </a>
            </div>
          </div>

          <div className="credit">
            created by Team <span>Boolean Autocrats</span> | all rights
            reserved!
          </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

        <script src="Assets/js/script.js"></script>
    </Fragment>
  )
}
export default Home;
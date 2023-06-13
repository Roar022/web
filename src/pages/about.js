import React, { Fragment } from "react";
// import Menu from "./menu";
import { Link } from "react-router-dom";
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();
function About() {
  return (
    <Fragment>
      {/* <Menu /> */}
      <div>
        <section className="header">
          <a href="home.html" className="logo">
            Safar
          </a>

          <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/package">package</Link>
          <Link to="/book" style={{ color: "#8e44ad" }}>book</Link>
          <Link to="/gallery">Gallery</Link>
          </nav>

          <div id="menu-btn" className="fas fa-bars"></div>
        </section>
        {/* header section ends here */}
       </div>
      <div
        className="heading"
        style={{ background: "url(Assets/Images/header-1.jpg) no-repeat" }}
      >
        <h1>About Us</h1>
      </div>

      {/* about section starts */}
      <section className="about">
        <div className="image">
          <img src="Assets/Images/img-4.jpg" alt="" />
        </div>

        <div className="content">
          <h3>Why choose us?</h3>
          <p>
            Welcome to our tourism website! We are a team of travel enthusiasts
            who believe that the best way to experience a new culture or
            destination is through immersive and personalized travel packages.
          </p>
          <p>
            Our packages are carefully designed to showcase the best of each
            destination, from popular tourist attractions to hidden gems that
            only locals know about. We offer a wide range of packages that cater
            to different interests, budgets, and durations.
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fa fa-map"></i>
              <span>top destination</span>
            </div>
            <div className="icons">
              <i className="fa fa-hand-holding-usd"></i>
              <span>affordable price</span>
            </div>
            <div className="icons">
              <i className="fa fa-headset"></i>
              <span>24/7 guide service</span>
            </div>
          </div>
        </div>
      </section>
      {/* about section ends */}

      {/* review section starts */}
      <section className="reviews">
        <h1 className="heading-title">clients reviews</h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I recently booked a tourism package through this website and it
                exceeded my expectations! The itinerary was well-planned and
                included all the must-visit destinations along with some hidden
                gems.
              </p>
              <h3>Harsh Kumar Singh</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf1.jpg" alt="" />
            </div>

            <div className="swiper-slide slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I had a wonderful time exploring a new country with the tourism
                package I booked through this website. The package was great
                value for money and included all the activities and experiences
                I wanted to have.
              </p>
              <h3>Bikram</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf4.jpg" alt="" />
            </div>

            <div className="swiper-slide slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I cannot thank this website enough for the amazing travel
                experience they provided. The package was very well-organized
                and included everything from airport transfers to sightseeing
                tours. The tour guide was very friendly and knowledgeable and
                made sure we were comfortable throughout the trip.
              </p>
              <h3>Devendra Gurnani</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf2.jpg" alt="" />
            </div>

            <div className="swiper-slide slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                Safar.com is a great agency with immediate response and
                customize the requirements. Safar.com made our north east
                experience memorable. I will suggest people planning to travel
                Assam, Meghalaya must also visit Majuli island My best wishes to
                Safar.com
              </p>
              <h3>Arpit Dubey</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf3.jpg" alt="" />
            </div>

            <div className="swiper-slide slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                Overall experience was good and overwhelming as the hotel, cabs
                and service was great which makes our overall trip also great as
                expected.
              </p>
              <h3>Krish Garg</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf1.jpg" alt="" />
            </div>

            <div className="swiper-slide slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                It was a good experience would be looking forward to plan trips
                Driver is co-operative and hotel staff was well behaved.
              </p>
              <h3>Siddhant Mukund</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf4.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="home.html">
              <i className="fas fa-angle-right"></i>home
            </a>
            <a href="about.html">
              <i className="fas fa-angle-right"></i>about
            </a>
            <a href="package.html">
              <i className="fas fa-angle-right"></i>package
            </a>
            <a href="book.html">
              <i className="fas fa-angle-right"></i>book
            </a>
            <a href="gallery.html">
              <i className="fas fa-angle-right"></i>gallery
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              <i className="fas fa-angle-right"></i>ask questions
            </a>
            <a href="#">
              <i className="fas fa-angle-right"></i>about us
            </a>
            <a href="#">
              <i className="fas fa-angle-right"></i>privacy policy
            </a>
            <a href="#">
              <i className="fas fa-angle-right"></i>terms of use
            </a>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <a href="#">
              <i className="fas fa-phone"></i> +123-456-7890
            </a>
            <a href="#">
              <i className="fas fa-phone"></i> +111-222-3333
            </a>
            <a href="#">
              <i className="fas fa-envelope"></i> autocrats@gmail.com
            </a>
            <a href="#">
              <i className="fas fa-map"></i> Lucknow , india - 222001
            </a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              <i className="fab fa-facebook-f"></i> facebook
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i> twitter
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i> instagram
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i> linkedin
            </a>
          </div>
        </div>

        <div className="credit">
          created by Team <span>Boolean Autocrats</span> | all rights reserved!
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="Assets/js/script"></script>
    </Fragment>
  );
}
export default About;

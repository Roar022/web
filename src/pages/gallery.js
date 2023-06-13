import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();
function Gallery(){
  return (
    <Fragment>
 <>
        <section className="header">
          <a href="home.html" className="logo">
            Safar
          </a>

          <nav className="navbar">
            {/* <a href="/">home</a>
             */}
             <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/package">package</Link>
          <Link to="/book" style={{ color: "#8e44ad" }}>book</Link>
          <Link to="/gallery">Gallery</Link>
          </nav>

          <div id="menu-btn" className="fas fa-bars"></div>
        </section>

        <div className="gallery-container">
          <img className="gallery-img" src="Assets/Images/gallery-1.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-2.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-3.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-4.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-5.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-6.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-7.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-8.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-9.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-10.jpeg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-11.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-12.jpg" alt="" />
        </div>

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
        <script src="script.js"></script>
      </>    </Fragment>
  )
}
export default Gallery;
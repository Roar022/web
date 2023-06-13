import React , { Fragment } from "react";
import { Link } from "react-router-dom";
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();
function Menu(){
  return (
    <Fragment>
<div>
<section className="header">
        <a href="home.html" className="logo">Safar</a>

        <nav className="navbar">
        {/* <Link to="/">Home</Link>
         <Link to="/about">About</Link> */}
        {/* <Link to="/package">Package</Link>
        <Link to="/book">Book</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/Home.html">Home</Link>  */}
          <a href="Home.html">home</a>
          <a href="about.html">about</a>
          <a href="package.html">package</a>
          <a href="book.html" style={{ color: "#8e44ad" }}>book</a>
          <a href="gallery.html">Gallery</a>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>
      </section>
</div>
    </Fragment>
     )
    }
    export default Menu;
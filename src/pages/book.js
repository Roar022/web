import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();
function Book() {
  return (
    <Fragment>
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

        <div
          className="heading"
          style={{ background: "url(Assets/Images/beach-3.jpg)" }}
        >
          <h1>Book Now</h1>
        </div>

        <section className="booking">
          <h1 className="heading-title">book your trip!</h1>

          <form action="#" className="book-form">
            <div className="flex">
              <div className="inputBox">
                <span>Name : </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                  onInvalid={() => {
                    this.setCustomValidity("Only Alphabets Allowed.");
                  }}
                  onChange={() => {
                    this.setCustomValidity("");
                  }}
                  required
                />
              </div>

              <div className="inputBox">
                <span>Email : </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  pattern="([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))"
                  onInvalid={() => {
                    this.setCustomValidity("Invalid Email Address.");
                  }}
                  onChange={() => {
                    this.setCustomValidity("");
                  }}
                  required
                />
              </div>

              <div className="inputBox">
                <span>Phone : </span>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Your Number"
                  pattern="[0-9]{10}"
                  onInvalid={() => {
                    this.setCustomValidity(
                      "Invalid Phone Number(Min 10 digits required)."
                    );
                  }}
                  onChange={() => {
                    this.setCustomValidity("");
                  }}
                  required
                />
              </div>

              <div className="inputBox">
                <span>Address : </span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  required
                />
              </div>

              <div className="inputBox">
                <span>Where To : </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Place you want to visit "
                  required
                />
              </div>

              <div className="inputBox">
                <span>How Many Person: </span>
                <input
                  type="number"
                  name="guests"
                  defaultValue="1"
                  min="1"
                  required
                />
              </div>

              <div className="inputBox">
                <span>Arrivals : </span>
                <input type="date" name="arrivals" required />
              </div>

              <div className="inputBox">
                <span>leaving : </span>
                <input type="date" name="leaving" required />
              </div>
            </div>

            <input type="submit" value="submit" className="btn" name="send" />
          </form>
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
                <i className="fas fa-envelope"></i> autocrats@gmail.com{" "}
              </a>
              <a href="#">
                <i className="fas fa-map"></i> Lucknow , india - 222001{" "}
              </a>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a href="#">
                <i className="fab fa-facebook-f"></i> facebook{" "}
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i> twitter{" "}
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i> instagram{" "}
              </a>
              <a href="#">
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
      </div>
    </Fragment>
  );
}
export default Book;

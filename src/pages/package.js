import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();

function Package(){
  return (
    <Fragment>
         
      <section className="header">
        <a href="home.html" className="logo">Safar</a>

        <nav className="navbar">
        <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/package">package</Link>
          <Link to="/book" style={{ color: "#8e44ad" }}>book</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>
      </section>

      <div className="heading" style={{ background: 'url(Assets/Images/Beach.jpg) no-repeat' }}>
        <h1>Packages</h1>
      </div>

      <section className="packages">
        <h1 className="heading-title">top destinations</h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="Assets/Images/dest-3.jpg" alt="" />
            </div>
            <div className="content">
              <h3>TAJ MAHAL</h3>
              <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra the edifice is one of the new 7 wonders of the world.</p>
              <a href="book.html" className="btn">book now</a>
            </div>
          </div>

          <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-2.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>TUSCAN,ITALY</h3>
                    <p>Enjoy a wine tour to the Tuscan countryside for independent travelers aged between 18-35. Explore
                        the beautiful Chianti landscape while sampling delicious traditional wines.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-1.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>SAINT BASIL'S CATHEDRAL</h3>
                    <p>The Cathedral of Vasily the Blessed, commonly known as Saint Basil's Cathedral, is an Orthodox
                        church in Red
                        Square of Moscow, and is one of the most popular cultural symbols of Russia.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-4.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>EIFFEL TOWER</h3>
                    <p>Eiffel Tower has been a powerful and distinctive symbol of the city of Paris, and by extension,
                        of France. At first, when it was built for the 1889 World's Fair.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-5.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>ASSI GHAT</h3>
                    <p>Assi ghat is described in the Kashi Khand as Assi “Saimbeda Tirtha” means the one who gets a dip
                        here once in his life will get punya of all the Tirthas (religious places of the Hindu).</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-6.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>THE GOLDEN TEMPLE</h3>
                    <p>The Golden Temple Amritsar India (Sri Harimandir Sahib Amritsar) is not only a central religious
                        place of the
                        Sikhs, but also a symbol of human brotherhood and equality.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-7.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>GREAT PYRAMID OF GIZA</h3>
                    <p>The Great Pyramid of Giza is the oldest and largest of the three pyramids on the Giza plateau,
                        built for the pharaoh Khufu around 2560 BCE.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-8.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>LONDON</h3>
                    <p>London is the capital and largest city of England and the United Kingdom, Welcome to London!
                        Discover the best of London with Visit London, the official guide to England’s exciting capital.
                    </p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-9.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>DERAWAR FORT</h3>
                    <p>Derawar fort is the best surviving example of this series of historic forts, some dating from
                        pre-Mughal times,
                        but all restored and expanded from the 16th to 18th century by powerful local clans.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-10.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>KARERI LAKE</h3>
                    <p>Kareri Lake is a shallow high elevation fresh water lake located on the southern spur of the
                        Dhauladhar range in Kangra district, Himachal Pradesh, India.
                    </p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-15.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>INTERLAKEN</h3>
                    <p>Nestled between Lake Thun to the west and Lake Brienz to the east, Interlaken is one of
                        Switzerland's
                        most popular summer holiday resorts.</p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="Assets/Images/dest-12.jpg" alt=""/>
                </div>
                <div class="content">
                    <h3>KANDIMA MALDIVES</h3>
                    <p>Kandima is much more than just a holiday. This game-changing destination offers a seriously
                        stylish island
                        setting with extraordinary restaurants and bars and plenty of on-site activities to choose from.
                    </p>
                    <a href="book.html" class="btn">book now</a>
                </div>
            </div>
          {/* Rest of the boxes go here */}
        </div>

        {/* <div className="load-more"><span className="btn">load more</span></div> */}
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="home.html"><i className="fas fa-angle-right"></i>home</a>
            <a href="about.html"><i className="fas fa-angle-right"></i>about</a>
            <a href="package.html"><i className="fas fa-angle-right"></i>package</a>
            <a href="book.html"><i className="fas fa-angle-right"></i>book</a>
            <a href="gallery.html"><i className="fas fa-angle-right"></i>gallery</a>
          </div>
          
          <div class="box">
                <h3>extra links</h3>
                <a href="#"><i class="fas fa-angle-right"></i>ask questions</a>
                <a href="#"><i class="fas fa-angle-right"></i>about us</a>
                <a href="#"><i class="fas fa-angle-right"></i>privacy policy</a>
                <a href="#"><i class="fas fa-angle-right"></i>terms of use</a>
            </div>

            <div class="box">
                <h3>Contact Info</h3>
                <a href="#"><i class="fas fa-phone"></i> +123-456-7890</a>
                <a href="#"><i class="fas fa-phone"></i> +111-222-3333</a>
                <a href="#"><i class="fas fa-envelope"></i> autocrats@gmail.com </a>
                <a href="#"><i class="fas fa-map"></i> Lucknow , india - 222001 </a>
            </div>

            <div class="box">
                <h3>follow us</h3>
                <a href="#"><i class="fab fa-facebook-f"></i> facebook </a>
                <a href="#"><i class="fab fa-twitter"></i> twitter </a>
                <a href="#"><i class="fab fa-instagram"></i> instagram </a>
                <a href="#"><i class="fab fa-linkedin"></i> linkedin </a>
            </div>
          {/* Rest of the boxes go here */}
        </div>

        <div className="credit">
          created by Team <span>Boolean Autocrats</span> | all rights reserved!
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="Assets/js/script.js"></script>
   
    </Fragment>
  )
}
export default Package;
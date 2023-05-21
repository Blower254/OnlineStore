import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; // Import the CSS file for the banner styles

const Banner = () => {
  return (
    <div className="banner">
        <section class="wrapper">
            <div class="top">APPLE HUB</div>
            <div class="bottom" aria-hidden="true">Apple Hub</div>
         </section>
      <h1 >Welcome to Our Vast Ecommerce Marketplace!</h1>
      <p>Discover an extensive selection of high-quality products tailored to your needs.</p>
      <p>Enjoy a seamless shopping experience and exceptional customer service.</p>
      

        <button className="cta-button">
          <Link to="/products">Start Shopping Now</Link>
        </button>
    </div>
  );
};

export default Banner;

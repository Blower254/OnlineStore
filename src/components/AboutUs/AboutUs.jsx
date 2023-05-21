import React from 'react';
import { FaShippingFast, FaPhone } from 'react-icons/fa';
import './AboutUs.css'


function AboutUs() {
  return (
    <div className="about-us">
      <h2>iShoppersHubEA: Your One-Stop Shop for iProducts in East Africa</h2>
      <p>
        Welcome to iShoppersHubEA, your one-stop-shop for brand new iPhones in East Africa. At iShoppersHubEA, we are passionate about providing our customers with the latest Apple technology, backed by our commitment to quality and customer service.
      </p>
      <p>
        Our mission is to make the latest iPhones accessible to everyone in East Africa. We achieve this by providing fast and reliable shipping, with most orders arriving within 4 days of purchase. We also offer upfront payment options to give our customers peace of mind and a hassle-free shopping experience.
      </p>
      <p>
        At iShoppersHubEA, we pride ourselves on our commitment to customer satisfaction. Our Buyer Protection program covers your purchase from click to delivery, ensuring that you receive your iPhone in perfect condition. We also offer round-the-clock support to assist with any questions or concerns you may have.
      </p>
      <div className="iconsection">
          <div className="about-us-icons">
                
                <div className="icon">
                  <FaShippingFast />
                  <p>Delivery in less than 4 working days</p>
                </div>
                <div className="icon">
                  <FaPhone />
                  <p>You Can Reach Out to us anytime.</p>
                 
                  
                </div>
          
          </div>
      </div>
    </div>
  );
}
export default AboutUs;
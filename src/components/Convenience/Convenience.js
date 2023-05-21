import React from 'react';
import { FaMoneyBillAlt, FaGlobe, FaShieldAlt, FaShoppingCart, FaHeadset, FaMobileAlt } from 'react-icons/fa';
import './Convinience.css'

const Convenience = () => {
  return (
    <div className="convenience-container">
      <div className="convenience-column">
        <div className="convenience-icon"><FaMoneyBillAlt /></div>
        <h3>Great Value</h3>
        <p>We provide prices that are competitive on our range of over 1 million products.</p>
      </div>
      <div className="convenience-column">
        <div className="convenience-icon"><FaGlobe /></div>
        <h3>Worldwide Delivery</h3>
        <p>Our shipping services extend to over 20 countries and regions with the availability of our site in three languages.</p>
      </div>
      <div className="convenience-column">
        <div className="convenience-icon"><FaShieldAlt /></div>
        <h3>Safe Payment</h3>
        <p>You can make payments using the most popular and secure payment methods available worldwide.</p>
      </div>
      <div className="convenience-column">
        <div className="convenience-icon"><FaShoppingCart /></div>
        <h3>Shop with Confidence</h3>
        <p>Our Buyer Protection covers your purchase from click to delivery.</p>
      </div>
      <div className="convenience-column">
        <div className="convenience-icon"><FaHeadset /></div>
        <h3>24/7 Help Center</h3>
        <p>We provide 24/7 assistance to ensure a hassle-free shopping experience.</p>
      </div>
      <div className="convenience-column">
        <div className="convenience-icon"><FaMobileAlt /></div>
        <h3>Shop On-The-Go</h3>
        <p>You can access the world of iShoppersHubEA right at your fingertips by downloading the app.</p>
      </div>
    </div>
  );
};

export default Convenience;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ closeCart }) {
  const [dateTime, setDateTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        iShoppersHub
      </Link>

      <button className="menu-button" onClick={toggleMenu}>
        <span className="menu-button-icon"></span>
        <span className="menu-button-icon"></span>
        <span className="menu-button-icon"></span>
      </button>

      <ul className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>

      <p className="time">{dateTime.toLocaleString()}</p>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/ShoppingCart/CartPage';
import Navbar from './components/Navbar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Trends from './components/Trends/Trends';
import Convenience from './components/Convenience/Convenience';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Productsv1 from './components/ShoppingCart/Productsv1';
import Banner from './components/Banner/Banner';
import Procedure from './components/CssEffects/procedure';
import Checkout from './components/Checkout/Checkout';
import Reviews from './components/Reviews/Reviews';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => setIsCartOpen(false);

  const handleSearch = (query) => {
    console.log(`Searching for ${query}...`);
    // Perform the search using the query
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
          <div className="App">
            {isCartOpen && <CartPage cart={cart} closeCart={closeCart} />}
            <Navbar closeCart={closeCart} />
            
            <Routes>
            <Route
                    exact
                    path="/"
                    element={
                      <>
                        <Banner />
                        <Procedure />
                        <Trends />
                        
                      </>
                    }
              />
              <Route path="/products" element={
                 <>
                    <SearchBar onSearch={handleSearch} />
                    <Procedure />
                    <Productsv1 addToCart={addToCart} />
                  </>
            } />
              <Route path="/aboutus" element={<> <AboutUs /> <Reviews /></>} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            
            <Convenience />
            <FAQ />
            <Footer />
            <Copyright />
          </div>
      </Router>
  );
}

export default App;

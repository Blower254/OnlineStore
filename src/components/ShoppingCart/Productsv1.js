import React, { useState } from 'react';
import './Products.css';
import { FaShoppingCart } from 'react-icons/fa';
import CartPage from './CartPage';

function Products() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      image: 'paybill.jpg',
      price: '$999',
      description: 'A new pro camera system, cinematic mode, and ProMotion display.',
    },
    {
      id: 2,
      name: 'iPad Pro',
      image: 'ipadpro.jpg',
      price: '$799',
      description: 'The ultimate iPad experience. Now with the M1 chip.',
    },
    {
      id: 3,
      name: 'MacBook Air',
      image: 'macbookair.jpg',
      price: '$999',
      description: 'Power. It’s in the Air.',
    },
    {
      id: 4,
      name: 'AirPods Pro',
      image: 'airpodspro.jpg',
      price: '$249',
      description: 'The sound. The fit. The active noise cancellation.',
    },
    {
      id: 5,
      name: 'Apple Watch Series 7',
      image: 'applewatch7.jpg',
      price: '$399',
      description: 'The most advanced Apple Watch yet.',
    },
    {
      id: 6,
      name: 'HomePod mini',
      image: 'homepodmini.jpg',
      price: '$99',
      description: 'Room-filling sound. Siri intelligence.',
    },
    {
        id: 7,
        name: 'iPhone 13 Pro',
        image: 'iphone13pro.jpg',
        price: '$999',
        description: 'A new pro camera system, cinematic mode, and ProMotion display.',
      },
      {
        id: 8,
        name: 'iPad Pro',
        image: 'ipadpro.jpg',
        price: '$799',
        description: 'The ultimate iPad experience. Now with the M1 chip.',
      },
      {
        id: 9,
        name: 'MacBook Air',
        image: 'macbookair.jpg',
        price: '$999',
        description: 'Power. It’s in the Air.',
      },
      {
        id: 10,
        name: 'AirPods Pro',
        image: 'airpodspro.jpg',
        price: '$249',
        description: 'The sound. The fit. The active noise cancellation.',
      },
      {
        id: 11,
        name: 'Apple Watch Series 7',
        image: 'applewatch7.jpg',
        price: '$399',
        description: 'The most advanced Apple Watch yet.',
      },
      {
        id: 12,
        name: 'HomePod mini',
        image: 'homepodmini.jpg',
        price: '$99',
        description: 'Room-filling sound. Siri intelligence.',
      },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = () => {
    // handle checkout logic here
  };

  if (showCart) {
    return (
      <CartPage cart={cart} onCheckout={handleCheckout} />
    );
  }

  return (
    <div className="products">
      <div className="cart-icon" onClick={toggleCart}>
        <FaShoppingCart className='carticon1' />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">
              <span>{product.price}</span>
              <button onClick={() => addToCart({...product, quantity: 1})}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

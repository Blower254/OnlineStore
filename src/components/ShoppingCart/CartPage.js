import React, {useState} from 'react';
import './Cart.css';
import Checkout from '../Checkout/Checkout';

function CartPage({ cart, closeCart }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  
  
  const subtotal = cart.reduce((total, item) => total + parseInt(item.price.slice(1)) * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckoutClick = () => {
   setCheckoutOpen(true);
  };

  const handleBackClick = () => {
    closeCart();
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => item.quantity > 1 ? item.quantity-- : null}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => item.quantity++}>+</button>
              </td>
              <td>${parseInt(item.price.slice(1)) * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="subtotal">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="tax">
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
        </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleCheckoutClick}>Checkout</button>

      {checkoutOpen && <Checkout cart={cart} closeCart={() => setCheckoutOpen(false)} />}
    </div>
  );
}

export default CartPage;
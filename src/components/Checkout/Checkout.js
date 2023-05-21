import React, { useState } from 'react';
import './Checkout.css'

function Checkout() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [cartTotal, setCartTotal] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
    // You can submit the form or perform AJAX request to handle payment
  };

  const updateSummary = () => {
    // Implement your own logic to calculate the total amount from the cart
    const calculatedTotal = 99.99;
    setCartTotal(calculatedTotal);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleNext}>
            <h2>Step 1: Fill in your details</h2>
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <label htmlFor="mpesa-number">M-Pesa Number:</label>
            <input type="text" id="mpesa-number" value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} required />
            <button type="submit">Next</button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit}>
            <h2>Step 2: Payment</h2>
            <div>
              <h3>Delivery Details:</h3>
              <p><strong>Full Name:</strong> {fullName}</p>
              <p><strong>M-Pesa Number:</strong> {mpesaNumber}</p>
            </div>
            <div>
              <h3>Cart Summary:</h3>
              <p><strong>Total Amount:</strong> {cartTotal}</p>
            </div>
            <button type="button" onClick={handlePrevious}>Previous</button>
            <button type="submit">Pay</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="checkout">
      {renderFormStep()}
    </div>
  );
}

export default Checkout;

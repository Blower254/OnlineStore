import React from 'react';
import './procedure.css'

function Procedure() {
  return (
    <div className="procedure">
      <h1>
        Discover,{' '}
        <span className="underlined">
          <span className="underline-clip">Add To Cart</span>
        </span>
        <br />
        &amp; Checkout With Mpesa/Credit-Card/PayPal{' '}
        <br />
        <span className="underlined">
          <span className="underline-mask">Provide </span>
        </span>
        <br /> 
         Delivery Details {' '}
        <span className="underlined">
          <span className="underline-mask">Await </span>
        </span>
        <br />
        &amp; Pick Your Percel{' '}

      </h1>
    </div>
  );
}

export default Procedure;

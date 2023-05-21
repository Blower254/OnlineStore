import React from 'react';

function ShoppingCartIcon({ itemCount }) {
  return (
    <div className="shopping-cart-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.5 6.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5zm13 0c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5zm-3.73 13.83c.05.05.11.07.17.07h3.12c.06 0 .12-.02.17-.07.05-.05.08-.11.08-.17v-.87c0-.28-.22-.5-.5-.5h-6.24c-.28 0-.5.22-.5.5v.87c0 .06.03.12.08.17.05.05.11.08.17.08h2.75v1.37c0 .28.22.5.5.5s.5-.22.5-.5v-1.37h2.75zm-8.77-13.83c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5zm2.5 0c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5z"/>
      </svg>
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
}

export default ShoppingCartIcon;

import React from 'react';
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    { name: 'Jane***', product: 'iPhone 14', rating: 5, statement: 'This product exceeded my expectations!' },
    { name: 'Boaz***', product: 'MacBook Air', rating: 4, statement: 'I love this product! Highly recommended.' },
    { name: 'Don***', product: 'iPhone XR', rating: 5, statement: 'Best purchase ever. Will definitely buy again!' },
    { name: 'Jane***', product: 'iPhone 14', rating: 5, statement: 'This product exceeded my expectations!' },
    { name: 'Boaz***', product: 'MacBook Air', rating: 4, statement: 'I love this product! Highly recommended.' },
    { name: 'Don***', product: 'iPhone XR', rating: 5, statement: 'Best purchase ever. Will definitely buy again!' },
  ];

  return (
    <div className='reviews'>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.name}</h3>
          <p>Product Purchased: {review.product}</p>
          <p>{review.statement}</p>
          <div className="rating">
            {[...Array(review.rating)].map((_, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

import React from 'react';

const ProductCard = () => {
  return (
    <li className="card">
      <div className="card-up">
        <img src="" alt="" />
        <h4>Product Name</h4>
        <h5>Brand Name</h5>
        <h5>$ 299.99</h5>
      </div>
      <div className="card-down">
        <h5>Location</h5>
        <h5>Date</h5>
        <h5>Description</h5>
      </div>
    </li>
  );
};

export default ProductCard;

import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <li className="card">
      <div className="card-upper">
        <img className="product-img" src="https://picsum.photos/70/70" alt="" />
        <div className="card-details">
          <h4 className="product-name">Product Name</h4>
          <h5 className="brand-name">Brand Name</h5>
          <h5 className="price">$ 29.99</h5>
        </div>
      </div>
      <div className="card-lower">
        <h5>Location</h5>
        <h5>Date: 10:12:2021</h5>
        <h5>Description of the Product/Item</h5>
      </div>
    </li>
  );
};

export default ProductCard;

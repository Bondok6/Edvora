import React from 'react';
import './ProductName.css';
import ProductCard from './ProductCard';

const ProductName = () => {
  return (
    <>
      <h3 className="product-subtitle">Product Name</h3>
      <ul className="card-container">
        <ProductCard />
      </ul>
    </>
  );
};

export default ProductName;

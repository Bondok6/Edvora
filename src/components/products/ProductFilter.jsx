import React from 'react';
import './ProductFilter.css';

const ProductFilter = () => (
  <div className="filter-container">
    <h3 className="filter-title">Filter</h3>

    <select name="Products" id="product">
      <option value="product-value">product</option>
      <option value="product-value">product2</option>
      <option value="product-value">product3</option>
      <option value="product-value">product4</option>
    </select>

    <select name="State" id="state">
      <option value="state-value">state</option>
      <option value="state-value">state2</option>
      <option value="state-value">state3</option>
      <option value="state-value">state4</option>
    </select>

    <select name="City" id="city">
      <option value="city-value">city</option>
      <option value="city-value">city2</option>
      <option value="city-value">city3</option>
      <option value="city-value">city4</option>
    </select>
  </div>
);

export default ProductFilter;

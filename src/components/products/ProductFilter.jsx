import React, { useState, useEffect } from 'react';
import './ProductFilter.css';

const ProductFilter = ({
  products = [],
  productFilter,
  stateFilter,
  cityFilter,
  setStateFilter,
  setProductFilter,
  setCityFilter,
}) => {
  const [productName, setProductName] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productName = products.map((product) => product.brand_name);
      const productBrandUnique = [...new Set(productName)];
      setProductName(productBrandUnique);
      const state = products.map((product) => product.address.state);
      const stateUnique = [...new Set(state)];
      setState(stateUnique);
      const city = products.map((product) => product.address.city);
      const cityUnique = [...new Set(city)];
      setCity(cityUnique);
    }
  }, [products]);

  const productHandler = (e) => {
    setProductFilter(e.target.value);
  };

  const stateHandler = (e) => {
    setStateFilter(e.target.value);
  };

  const cityHandler = (e) => {
    setCityFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filter</h3>

      <select name="Products" id="product" onChange={productHandler}>
        {productName.length > 0 &&
          productName.map((product) => (
            <option value={product}>{product}</option>
          ))}
      </select>

      <select name="State" id="state" onChange={stateHandler}>
        {state.length > 0 &&
          state.map((state) => <option value={state}>{state}</option>)}
      </select>

      <select name="City" id="city" onChange={cityHandler}>
        {city.length > 0 &&
          city.map((city) => <option value={city}>{city}</option>)}
      </select>
    </div>
  );
};

export default ProductFilter;

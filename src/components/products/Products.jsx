import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductName from './ProductName';

const Products = ({ products = [] }) => {
  const [productName, setProductName] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productName = products.map((product) => product.brand_name);
      const productBrandUnique = [...new Set(productName)];
      setProductName(productBrandUnique);
    }
  }, [products]);

  return (
    <>
      {products.length > 0 &&
        productName.map((brand) => {
          return <ProductName key={brand} brand={brand} products={products} />;
        })}
    </>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

export default Products;

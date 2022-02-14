import React, { useState, useEffect } from 'react';
import ProductName from './ProductName';
import PropTypes from 'prop-types';

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
          return <ProductName brand={brand} products={products} />;
        })}
    </>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

export default Products;

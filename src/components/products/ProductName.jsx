import React from 'react';
import PropTypes from 'prop-types';
import './ProductName.css';
import ProductCard from './ProductCard';
import rightArrow from './imgs/right-arrow.svg';

const ProductName = ({ products }) => {
  // const nextHandler = () => {
  //   console.log('clicked');
  // };

  return (
    <section className="product-name-section">
      <h3 className="product-subtitle">Product Name</h3>
      <ul className="card-container">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.time}
              img={product.image}
              name={product.product_name}
              brand={product.brand_name}
              price={product.price}
              location={product.address}
              date={product.date}
              description={product.discription}
            />
          ))}
      </ul>
      <img
        className="right-icon"
        src={rightArrow}
        alt="right-arrow"
        // onClick={nextHandler}
      />
    </section>
  );
};
ProductName.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

export default ProductName;

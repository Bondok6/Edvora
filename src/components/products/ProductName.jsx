import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductName.css';
import ProductCard from './ProductCard';
import rightArrow from '../imgs/right-arrow.svg';

const ProductName = ({ products = [], brand }) => {
  const [items, setItems] = useState([]);
  const slider = useRef();
  const rightIcon = useRef();
  const leftIcon = useRef();

  const [counter, setCounter] = useState(1);
  const size = 235;

  useEffect(() => {
    if (products.length) {
      const data = products.filter((product) => {
        if (product.brand_name === brand) return product;
      });
      setItems(data);
    }
  }, [products, brand]);

  useEffect(() => {
    slider.current.style.transform = `translateX(${-size * counter}px)`;
  }, []);

  const nextHandler = () => {
    if (counter === products.length - 5) return;
    slider.current.style.transition = 'transform 0.4s ease-in-out';
    const c = counter + 1;
    slider.current.style.transform = `translateX(${-size * c}px)`;
    setCounter(c);
  };

  const prevHandler = () => {
    if (counter <= 0) return;
    slider.current.style.transition = 'transform 0.4s ease-in-out';
    const c = counter - 1;
    slider.current.style.transform = `translateX(${-size * c}px)`;
    setCounter(c);
  };

  return (
    <section className="product-name-section">
      <h3 className="product-subtitle">{brand}</h3>

      <div className="slider-container">
        <div className="slider" ref={slider}>
          {
            /* prettier-ignore */
            items.length > 0
          && items.map((product) => (
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
          ))
          }
        </div>
      </div>

      <img
        className="right-icon"
        src={rightArrow}
        alt="right-arrow"
        onClick={nextHandler}
        aria-hidden="true"
        ref={rightIcon}
      />

      <img
        className="left-icon"
        src={rightArrow}
        alt="left-arrow"
        onClick={prevHandler}
        aria-hidden="true"
        ref={leftIcon}
      />
    </section>
  );
};
ProductName.propTypes = {
  products: PropTypes.arrayOf.isRequired,
  brand: PropTypes.string.isRequired,
};

export default ProductName;

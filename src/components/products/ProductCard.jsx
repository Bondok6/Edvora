import React from 'react';
import './ProductCard.css';
import PropTypes from 'prop-types';

const ProductCard = ({
  img,
  name,
  brand,
  price,
  location,
  date,
  description,
}) => (
  <div className="card">
    <div className="card-upper">
      <img className="product-img" src={img} alt="" />
      <div className="card-details">
        <h4 className="product-name">{name}</h4>
        <h5 className="brand-name">{brand}</h5>
        {/* prettier-ignore */}
        <h5 className="price">$ {price}</h5>
      </div>
    </div>
    <div className="card-lower">
      {/* prettier-ignore */}
      <h5>{location.state}, {location.city}</h5>
      <h5>Date: {date.slice(0, 10)}</h5>
      <h5>{description}</h5>
    </div>
  </div>
);

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.objectOf.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;

import React from 'react';
import products from '../data/products.json'; // Correct relative path

const ProductSlide = ({ product }) => {
  return (
    <div className="product-slide">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Original Price: ${product.original_price}</p>
      <p>Discounted Price: ${product.discounted_price}</p>
      <button className="action-button">Add to cart</button>
      <button className="wishlist-button">Add to wishlist</button>
    </div>
  );
};

export default ProductSlide;
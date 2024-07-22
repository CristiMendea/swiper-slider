import React, { useContext } from 'react';
// import products from '../data/products.json'; // Correct relative path
import Button from './Button.jsx';
import CartContext from '../store/CartContext.jsx';
import { currencyFormatter } from '../util/formating.js';

const ProductSlide = ({ product }) => {
  const cartCtx = useContext(CartContext)
  function handleAddProduct(){
    cartCtx.addItem(cartCtx)
  }
  return (
    <div className="product-slide">
      <div  className="product-slide_image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-slide_description">
        <h3>{product.name}</h3>
        <div className="product-slide_description-content">
          <p className="product-price">
            <span className="product-price_label"><strong>Original Price:</strong></span>
            <span className="product-price_value"> {currencyFormatter.format(product.original_price)}</span>
          </p>
          {product.discounted_price !== null ? (
          <p className="discount-price">
            <span className="discount-price_label"><strong>Discounted Price:</strong></span>
            <span className="discount-price_value color-green"> {currencyFormatter.format(product.discounted_price)}</span>
          </p>
        ) : (
          <p className="discount-price">
             <span className="discount-price_label"><strong>Discounted Price:</strong></span> <span> Not Available</span>
          </p>
        )}
        </div>
      </div>
      <div className="product-slide_buttons">
        <Button className={'add-button'} onClick={handleAddProduct}>Add to cart</Button>
        <button className = "button wishlist-button" >Add to wishlist</button>
      </div>
    </div>
  );
};

export default ProductSlide;
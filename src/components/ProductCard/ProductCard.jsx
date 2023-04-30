import React from "react";
import { useProductContext } from "../../contexts/productContext";
import "./style.css";
function ProductCard({ product }) {
  const {
    state: { products },
    addToCart,
    removeFromCart,
  } = useProductContext();
  const isExistInCart = () => products.find((item) => item.id === product.id);

  const toggleCart = () => {
    isExistInCart() ? removeFromCart(product.id) : addToCart(product);
  };
  return (
    <>
      <li className="productCardWrapper">
        <h3 className="productCardName">
          Name: {product.name}
          <button className="productCardButton" onClick={toggleCart}>
            {isExistInCart() ? "-" : "+"}
          </button>
        </h3>
        <p className="productCardDescription">
          Description: {product.description}
        </p>
        <span className="productCardPrice">Price:{product.price}</span>
      </li>
    </>
  );
}

export default ProductCard;

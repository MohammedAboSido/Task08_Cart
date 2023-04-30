import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductContext } from "../../contexts/productContext";
import "./style.css";
function CartPage() {
  const { state } = useProductContext();
  return (
    <>
      <div className="cartPageWrapper">
        {!state.products.length && "No Products in the cart"}
        <ul>
          {state?.products?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ul>
        <p className="cartPageCount">Products in cart: {state?.count}</p>
        <p className="cartPagePrice">
          total price:
          {state?.products?.reduce((acc, cur) => acc + cur.price, 0)}
        </p>
      </div>
    </>
  );
}

export default CartPage;

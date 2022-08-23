import React from "react";
import { useDispatch } from "react-redux";
import { initialProducts } from "../reducers/rootReducer";

export default function Products() {
  const dispatch = useDispatch();
  return (
    <div className="products_container">
      <h1>Benji and Winnie Toy Shop</h1>
      {initialProducts.map((product) => {
        return (
          <button
            key={product.description}
            onClick={() => dispatch({ type: "ADD_PRODUCT", payload: product })}
            className="products_button"
          >
            {product.description}
            <p></p> {product.price}
          </button>
        );
      })}
    </div>
  );
}

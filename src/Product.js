import React from "react";
import { useDispatch } from "react-redux";
import { cartItemsActions } from "./store/CartItems";

const Product = (props) => {
  const dispatch = useDispatch();
  const { name, id, price } = props;
  const addtoItemHandler = () => {
    dispatch(
      cartItemsActions.addItemsinCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="card">
      <div className="prduct">
        <div className="d-flex space-between">
          <strong style={{ fontSize: "1.5rem", marginTop: "20px" }}>
            {props.name}
          </strong>
          <span className="price">${props.price}</span>
        </div>
        <span
          style={{ textAlign: "left", display: "block", fontSize: "1.2rem" }}
        >
          This is a first product - amazing!
        </span>
        <button className="cartBtn" onClick={addtoItemHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

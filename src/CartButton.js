import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/CartStore";
const CartButton = () => {
  
const qty = useSelector(state => state.cartItems.totalQuantity);
  const dispatch = useDispatch();
  const cartBtnHandler = () =>{
    dispatch(cartActions.togglecartHandler())
  }

  return (
    <button
    onClick={cartBtnHandler}
      style={{ margin: "0", border: "2px solid #000", padding: "5px 20px" }}
    >
      Cart Button{" "}
      <span
        style={{
          lineHeight: "18px",
          background: "yellow",
          color: "black",
          borderRadius: "50%",
          padding: "3px 9px",
          display: "inline-block",
          cursor:'pointer'
        }}
      >
        {qty}
      </span>
    </button>
  );
};

export default CartButton;

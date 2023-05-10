import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/CartStore";
import ShoppingModal from "./ShoppingModal";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const itemsCart = useSelector((state) => state.cartItems.items);

  const hideCartModal = () => {
    dispatch(cartActions.cartHideModal());
  };

  return (
    <div className="card cartContainerFluid">
      <div className="cartMainContainer">
        <h1>Your Shopping Cart</h1>

        {itemsCart.map((item) => {
          return (
        <ShoppingModal key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity}  />

          );
        })}
   
      </div>

      <span className="bg" onClick={hideCartModal}></span>
    </div>
  );
};

export default ShoppingCart;

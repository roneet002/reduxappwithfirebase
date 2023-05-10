import React from 'react'
import { useDispatch } from 'react-redux';
import { cartItemsActions } from "./store/CartItems";

const ShoppingModal = (props) => {
  
const {id, name, price, } = props;
  const dispatch = useDispatch();
  const itemAddHandler = () => {
    dispatch(cartItemsActions.addItemsinCart({
       id,
       name,
       price,
    }));
  };
  const itemRemoveHandler = () => {
    dispatch(cartItemsActions.removeItemsinCart({id,price}));
  };
  
  return (
    <>
    <div className='modalCart'>
        <div className="cartContainer">
              <div className="d-flex flex-column">
                <span>{props.name}</span>
                <span>x{props.quantity}</span>
              </div>

              <div className="d-flex flex-column">
                <span>
                  ${props.price}
                  <i>($6.00/item)</i>
                </span>
                <div className="buttnCart">
                  <span style={{ cursor: "pointer" }} onClick={itemRemoveHandler}>-</span>
                  <span style={{ cursor: "pointer" }} onClick={itemAddHandler}>
                    +
                  </span>
                </div>
              </div>
            </div>
    </div>

    </>
  )
}

export default ShoppingModal

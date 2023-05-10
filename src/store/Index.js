import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterStore";
import CounterAuth from "./AuthStore";
import cartReducer from "./CartStore";
import CartItemsReducer from "./CartItems";

const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    auth: CounterAuth.reducer,
    cartToggle: cartReducer.reducer,
    cartItems : CartItemsReducer.reducer
  },
});

export default store;

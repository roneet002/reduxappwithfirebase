import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartToggleState: false,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState: cartInitialState,
  reducers: {
    togglecartHandler(state) {
      state.cartToggleState = true
    },
    cartHideModal(state){
        state.cartToggleState = false;

    }
  },
});

export const cartActions = cartReducer.actions;
export default cartReducer;

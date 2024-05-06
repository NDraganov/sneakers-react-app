import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: 0,
  cartItems: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.items += 1;
    },
    decrement: (state) => {
      state.items -= 1;
    },
    addItems(state) {
      localStorage.setItem("items", JSON.stringify(state.items));
      const itemsStorage = JSON.parse(localStorage.getItem("items"));
      state.cartItems = itemsStorage;
      state.items = 0;
    },
    getItems(state) {
      const itemsStorage = JSON.parse(localStorage.getItem("items"));
      state.cartItems = itemsStorage;
    },
  },
});

export const { increment, decrement, addItems, getItems } = cartSlice.actions;

export default cartSlice.reducer;

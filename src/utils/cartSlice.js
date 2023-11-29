import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    email: "",
    password: "",
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: state => {
      state.items.pop();
    },
    clearCart: state => {
      state.items.length = 0;
    },
    addEmail: (state, action) => {
      console.log("email:action.payload", action.payload);
      state.email = action.payload;
    },
    addPassword: (state, action) => {
      console.log("password", action.payload);
      state.password = action.payload;
    },
  },
});
export const {addItem, removeItem, clearCart, addEmail, addPassword} =
  cartSlice.actions;
export default cartSlice.reducer;

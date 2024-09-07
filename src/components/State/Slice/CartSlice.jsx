import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount++;
      const cartItem = state.cartItem.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      //ใช้ ternary ตรวจสอบว่าใน cartItem มีสินค้านี้หรือไม่(เป็นundefindหรือไม่ ถ้าไม่เป้นให้สินค้านั้น +1 ถ้าเป็น ให้สินค้านั้น =1)
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItem.push({ ...action.payload, amount: 1 });
    },
    // set action ปุ่ม + ใน checkout
    increase: (state, action) => {
      state.amount++;
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItem[itemIndex].amount += 1;
      let total = 0;
      total = state.cartItem[itemIndex].amount * state.cartItem.price;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItem[itemIndex].amount > 0 &&
        state.cartItem[itemIndex].amount-- &&
        state.amount--;
    },
    remove: (state, action) => {
      state.cartItem.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItem = state.cartItem.filter(
            (item) => item.id !== cartItem.id
          );
          state.amount = state.amount - cartItem.amount;
        }
      });
    },
    // ราคารวมสินค้าทั้งหมดในcart
    total: (state) => {
      let total = 0;
      state.cartItem.forEach((cartItem) => {
        total += cartItem.amount * cartItem.price;
      });
      state.total = total;
    },
    clear: (state) => {
      state.cartItem = [];
      state.amount = 0;
    },
  },
});

export const { add, increase, decrease, remove, total, clear } =
  CartSlice.actions;
export default CartSlice.reducer;

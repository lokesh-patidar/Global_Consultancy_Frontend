import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     allCartItems: [],
     isCartItemsLoading: false,
     isCartItemsError: false,
};

const CartItemsSlice = createSlice({
     name: 'CartItems',
     initialState,
     reducers: {
          getCartItemsRequest(state) {
               state.isCartItemsLoading = true;
               state.isCartItemsError = false;
          },
          getCartItemsSuccess(state, action) {
               state.allCartItems = action.payload ? action.payload : [];
               state.isCartItemsLoading = false;
               state.isCartItemsError = false;
          },
          getCartItemsFailure(state, action) {
               state.allCartItems = [];
               state.isCartItemsLoading = false;
               state.isCartItemsError = true;
          },

     },
});


export const {

     getCartItemsRequest,
     getCartItemsSuccess,
     getCartItemsFailure,

} = CartItemsSlice.actions;

export default CartItemsSlice.reducer;

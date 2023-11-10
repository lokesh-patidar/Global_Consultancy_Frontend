import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from "./Authentication/authenticationSlice";
import userProfileReducer from "./UserProfile/userProfileSlice";
import productsSlice from './Products/productsSlice';
import cartSlice from './Cart/cartSlice';

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        userprofile: userProfileReducer,
        productsSlice,
        cartSlice,
    },
});

export default store;

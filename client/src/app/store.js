import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Shop/shopSlice';
import toastReducer from '../features/Toast/toastSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    toast: toastReducer,
  }
});

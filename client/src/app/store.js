import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Shop/shopSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  }
});

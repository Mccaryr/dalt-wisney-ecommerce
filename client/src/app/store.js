import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/Shop/shopSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer
  },
});

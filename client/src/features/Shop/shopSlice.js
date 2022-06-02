import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        return await fetch('http://localhost:5000/api/products').then((res) => 
            res.json()
        )
    }
)



const shopSlice = createSlice({
  name: 'products',
  initialState: {
      productList: [],
      cart: [],
      status: null
  },
  reducers: {
    addToCart: (state, action) => {    
        state.cart.push(action.payload);
        const user_email = JSON.parse(sessionStorage.getItem('user')).user_email
        const user_id = JSON.parse(sessionStorage.getItem('user'))._id
        sessionStorage.setItem('cartCount', state.cart.length)
        axios.put(`http://localhost:5000/api/cart/${user_id}`, {user_email: user_email, user_id: user_id, cart: state.cart})
    },
    getCart: (state, action) => {
        //nesting arrays issue and deleting items inappropriately
        state.cart = []
        // state.cart.push(action.payload)
        state.cart.push(...action.payload);
        sessionStorage.setItem('cartCount', state.cart.length)
    }
  }, 
  extraReducers: {
    [getProducts.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getProducts.fulfilled]: (state, {payload}) => {
        state.productList = payload;
        state.status = 'success'
    }, 
    [getProducts.rejected]: (state, action) => {
        state.status = 'failed'
    }
  }
});

export const {addToCart, getCart} = shopSlice.actions

export default shopSlice.reducer
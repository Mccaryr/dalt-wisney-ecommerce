import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        return await fetch('https://fakestoreapi.com/products')
            .then(res=>  res.json())
    }
)

export const addProductToDBCart = createAsyncThunk(
    'products/addProductToCart',
    async ({newCart}, thunkAPI) => {
        const user_email = JSON.parse(sessionStorage.getItem('user')).user_email
        const user_id = JSON.parse(sessionStorage.getItem('user'))._id
        try {
            const response = await axios.put(`${hostUrl}/api/cart/${user_id}`, {user_email: user_email, user_id: user_id, cart: newCart})
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


let hostUrl = 'https://dalt-wisney-ecommerce.onrender.com'


if(window.location.hostname === 'localhost'){
    hostUrl = 'http://localhost:5001'
}



const shopSlice = createSlice({
  name: 'products',
  initialState: {
      productList: [],
      cart: [],
      cartCount: 0,
      status: null
  },
  reducers: {
    addToCart: (state, action) => {
        const itemExist = state.cart.find(item => item._id === action.payload._id)
        if(!itemExist){
            state.cart.push(action.payload)
        }
        else {
            state.cart.map(item => {
                if(item._id === action.payload._id) {
                    item.qty = item.qty + 1
                }
            })
        }
        state.cartCount = state.cart.length;
    },
    getCart: (state, action) => {
        state.cart = []
        state.cart.push(...action.payload);
        state.cartCount = state.cart.length;
    },
    removeFromCart: (state, action) => {
        const user_email = JSON.parse(sessionStorage.getItem('user')).user_email
        const user_id = JSON.parse(sessionStorage.getItem('user'))._id
       let filteredList = state.cart.filter(item => {
            return item._id !== action.payload._id
            
        })
        state.cart = filteredList;
        axios.put(`${hostUrl}/api/cart/${user_id}`, {user_email: user_email, user_id: user_id, cart: state.cart})
        state.cartCount = state.cart.length;
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

export const {addToCart, getCart, removeFromCart} = shopSlice.actions

export default shopSlice.reducer
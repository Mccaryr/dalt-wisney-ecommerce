import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
        debugger;
        // sessionStorage.removeItem('cart');
        // sessionStorage.setItem('cart', JSON.stringify(state.cart));
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

export const {addToCart} = shopSlice.actions

export default shopSlice.reducer
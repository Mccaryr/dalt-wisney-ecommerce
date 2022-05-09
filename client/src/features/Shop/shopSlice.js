import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        return await fetch('http://localhost:5000/products').then((res) => 
            res.json()
        )
    }
)


const shopSlice = createSlice({
  name: 'products',
  initialState: {
      productList: [],
      status: null
  },
//   reducers: {
//     fetchShopData: (state, action) => {
//         // const products = async fetch('localhost:5000/products')
//     }
//   }, 
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

// export const {} = shopSlice.actions

export default shopSlice.reducer
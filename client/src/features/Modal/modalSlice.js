import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
      openModal: (state, action) => {
          state = true
      }
  }
});

export const {openModal} = modalSlice.actions

export default modalSlice.reducer
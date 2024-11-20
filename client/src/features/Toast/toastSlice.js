import { createSlice } from "@reduxjs/toolkit";


const toastSlice = createSlice({
    name: "toast",
    initialState: {
        visible: false,
        status: "",
        message: ""
    },
    reducers: {
        setToastDetails: (state, action) => {
            const {visible, status, message} = action.payload
            state.visible = visible
            state.status = status
            state.message = message
        }
    }
})

export const {setToastDetails} = toastSlice.actions;

export default toastSlice.reducer
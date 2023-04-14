import { createSlice } from "@reduxjs/toolkit";

export const ModalAppSlice = createSlice({
    name: 'modal',
    initialState: {
        isShow: false,
        users:{}
    },
    reducers: {
        openLogin: (state,action) => {
            state.isShow = true
        },
        closeLogin: (state,action) => {
            state.isShow = false
        },
        getUsers : (state,action) => {
       
            state.users = action.payload
          

         },

    }
    
})

export const {actions,reducer} = ModalAppSlice;
export const {openLogin,closeLogin,getUsers} = actions
export default reducer
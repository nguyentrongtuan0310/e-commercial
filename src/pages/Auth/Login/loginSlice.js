import {  createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
        name: 'login',
        initialState: {
            users:{}
        },
        reducers: {
            getUsers : (state,action) => {
                    state.users = action.payload
            }
        }
})
const {actions,reducer} = loginSlice
export const {getUsers} = actions
export default reducer
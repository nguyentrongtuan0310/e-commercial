import {createReducer } from '@reduxjs/toolkit'

const countReducer = createReducer(0,{
   
    increse : (state,action) => state + action.payload,
    decrese : (state,action) => state - action.payload
})
export default countReducer
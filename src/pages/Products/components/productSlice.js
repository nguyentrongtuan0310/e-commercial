import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from '../../../api/ProductApi/productApi'
export const fetchProduct  = createAsyncThunk('products/fetchProduct',async() => {
    const res = await productApi.getAll()
    return res
})
export const addProduct  = createAsyncThunk('products/fetchProduct',async(data) => {
    const res = await productApi.addProduct(data)
    
    return res
})

export  const productSlice = createSlice({
    name : 'product',
    initialState: {
        products: [],
        isLoading: false,
    },
    reducers : {
      
    },
    extraReducers: {
        [fetchProduct.pending] : (state,aciton) => {
            state.isLoading = true
        },
        [fetchProduct.fulfilled] : (state,aciton) => {
            state.isLoading = false
            state.products = aciton.payload

        },
        [fetchProduct.rejected] : (state,aciton) => {
            

        },
    }


})


export const {actions,reducer} = productSlice

export default reducer
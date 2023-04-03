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
            console.log('Pending');
        },
        [fetchProduct.fulfilled] : (state,aciton) => {
            state.products = aciton.payload
            console.log('fulfilled');
        },
        [fetchProduct.rejected] : (state,aciton) => {
            console.log('Rejected');
        },
    }


})


export const {actions,reducer} = productSlice

export default reducer
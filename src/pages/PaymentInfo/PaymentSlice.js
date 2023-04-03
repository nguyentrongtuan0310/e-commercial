import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthProvince = createAsyncThunk('fetch/province', async() => {
    const res = await axios.get("https://provinces.open-api.vn/api/?depth=2")
    return res.data
})
export const fecthWard = createAsyncThunk('fetch/ward', async() => {
    const res = await axios.get("https://provinces.open-api.vn/api/w")
    return res.data
})


export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        listProvinces: [],
        listDistricts: [],
        listWard: [],
   
       
        

    },
    reducers: {
        getListDistricts: (state,action) => {
            const data = [...state.listProvinces]
            if(data.length > 0){
                const index = data.findIndex(item => item.code === action.payload)
                state.listDistricts =data[index]
            }
        } 
       
    },
    extraReducers: {
        [fecthProvince.pending] : (state,aciton) => {
            state.status = 'Pending'
        },
        [fecthProvince.fulfilled] : (state,aciton) => {
            state.listProvinces= aciton.payload
            state.status = 'Fulfilled'

        },
        [fecthProvince.rejected] : (state,aciton) => {
            console.log('Rejected');
        },
        [fecthWard.pending] : (state,aciton) => {
            state.status = 'Pending'
        },
        [fecthWard.fulfilled] : (state,aciton) => {
            state.listWard= aciton.payload
            state.status = 'Fulfilled'

        },
        [fecthWard.rejected] : (state,aciton) => {
            console.log('Rejected');
        },
    }
})

export const {actions,reducer} = paymentSlice;
export const {getListDistricts,getListWard} = actions
export default reducer
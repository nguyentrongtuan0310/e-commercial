import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'count',
    initialState: {
        count : 0,
        value: []
     
    },
    reducers : {
        incremented(state,aciton){
            state.count  = state.count + aciton.payload
        },
        decremented(state,aciton){
            state.count = state.count - aciton.payload
        },
        getData(state,aciton){
            state.value = aciton.payload
        },
       
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchData.pending, (state,aciton) => {
                state.status = 'Pendding'
            }) 
            .addCase(fetchData.fulfilled, (state,aciton) => {
                state.status = 'DOne'
                state.value = aciton.payload
            }) 
            .addCase(fetchData.rejected, (state,aciton) => {
                state.status = 'Reject'
            }) 
    }
})

export const  {actions,reducer} = counterSlice
export const {incremented,decremented} = actions
export const fetchData = createAsyncThunk(
    'data/fetchData',async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts'
        )
        return res.json('')
       
    }
)
export default reducer
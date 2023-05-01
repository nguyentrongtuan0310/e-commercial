import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../api/ProductApi/productApi';

export const fetchPhone = createAsyncThunk('phone/fetchPhone', async () => {
    const res = await productApi.getPhone();
    return res;
});
export const fetchTablet = createAsyncThunk('tablet/fetchTablet', async () => {
    const res = await productApi.getTablet();
    return res;
});
export const fetchLaptop = createAsyncThunk('Laptop/fetchLaptop', async () => {
    const res = await productApi.getLaptop();
    return res;
});
export const fetchSound = createAsyncThunk('Sound/fetchSound', async () => {
    const res = await productApi.getSound();
    return res;
});
export const fetchWatch = createAsyncThunk('Watch/fetchWatch', async () => {
    const res = await productApi.getWatch();
    return res;
});
export const fetchAll = createAsyncThunk('all/fetchAll', async () => {
    const res = await productApi.getAll();
    return res;
});

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false,
        all: {},
    },
    reducers: {},
    extraReducers: {
        [fetchPhone.pending]: (state, aciton) => {
            state.isLoading = true;
        },
        [fetchPhone.fulfilled]: (state, aciton) => {
            state.isLoading = false;
            state.products = aciton.payload;
        },
        [fetchPhone.rejected]: (state, aciton) => {},
        [fetchTablet.pending]: (state, aciton) => {
            state.isLoading = true;
        },
        [fetchTablet.fulfilled]: (state, aciton) => {
            state.isLoading = false;
            state.products = aciton.payload;
        },
        [fetchTablet.rejected]: (state, aciton) => {},
        [fetchLaptop.pending]: (state, aciton) => {
            state.isLoading = true;
        },
        [fetchLaptop.fulfilled]: (state, aciton) => {
            state.isLoading = false;
            state.products = aciton.payload;
        },
        [fetchLaptop.rejected]: (state, aciton) => {},
        [fetchSound.pending]: (state, aciton) => {
            state.isLoading = true;
        },
        [fetchSound.fulfilled]: (state, aciton) => {
            state.isLoading = false;
            state.products = aciton.payload;
        },
        [fetchSound.rejected]: (state, aciton) => {},
        [fetchWatch.pending]: (state, aciton) => {
            state.isLoading = true;
        },
        [fetchWatch.fulfilled]: (state, aciton) => {
            state.isLoading = false;
            state.products = aciton.payload;
        },
        [fetchWatch.rejected]: (state, aciton) => {},
        [fetchAll.pending]: (state, aciton) => {
            state.isLoading = true;
        },
        [fetchAll.fulfilled]: (state, aciton) => {
            state.isLoading = false;
            state.all = aciton.payload;
        },
        [fetchAll.rejected]: (state, aciton) => {},
    },
});

export const { actions, reducer } = productSlice;

export default reducer;

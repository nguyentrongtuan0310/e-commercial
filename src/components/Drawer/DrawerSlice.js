import { createSlice } from '@reduxjs/toolkit';

export const DrawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        isShowDrawer: false,
    },
    reducers: {
        openDrawer: (state, action) => {
            state.isShowDrawer = true;
        },
        closeDrawer: (state, action) => {
            state.isShowDrawer = false;
        },
    },
});

export const { actions, reducer } = DrawerSlice;
export const { openDrawer, closeDrawer } = actions;
export default reducer;

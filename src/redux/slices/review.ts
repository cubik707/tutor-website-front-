import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    status: "loading",
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
});

export const reviewsReducer = reviewsSlice.reducer;
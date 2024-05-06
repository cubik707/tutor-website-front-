import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const fetchReviews = createAsyncThunk('reviews/fetchReviews',
    async () => {
        const {data} = await axios.get('/reviews');
        return data;
    }
);

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
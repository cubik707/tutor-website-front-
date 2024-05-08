import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

type UserType = {
    avatarUrl: string
    fullName: string
}

type UserTutorType = {
    fullName: string
}

type TutorId = {
    user: UserTutorType
}

// Создание типа для отзыва
interface ReviewItem {
    rating: number
    tutorId: TutorId
    user: UserType
    comment: string
}

// Создание типа для начального состояния
interface ReviewsState {
    items: ReviewItem[];
    status:'loading' | 'loaded' | 'error';
}

const initialState: ReviewsState = {
    items: [],
    status: "loading",
};

export const fetchReviews = createAsyncThunk('reviews/fetchReviews',
    async () => {
        const { data } = await axios.get('/reviews');
        return data;
    }
);

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchReviews.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            });
    },
});

export const reviewsReducer = reviewsSlice.reducer;
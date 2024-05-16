import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

type UserType = {
    avatarUrl: string
    fullName: string
    _id: string
}

type UserTutorType = {
    fullName: string
}

type TutorId = {
    user: UserTutorType
}

// Создание типа для отзыва
export interface ReviewItem {
    _id: string
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

export const fetchRemoveReview = createAsyncThunk('reviews/fetchRemoveReview',
    async (id) => {
        await axios.delete(`/reviews/${id}`)
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
            })
            .addCase(fetchRemoveReview.pending, (state, action) => {
                const id = action.meta.arg;
                if (typeof id !== 'undefined') {
                    state.items = state.items.filter(obj => obj._id !== id);
                }
                state.status = 'loading';
            })
            .addCase(fetchRemoveReview.fulfilled, (state) => {
                state.status = 'loaded';
            })
    },
});

export const reviewsReducer = reviewsSlice.reducer;
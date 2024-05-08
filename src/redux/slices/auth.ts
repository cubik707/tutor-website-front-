import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.data = null;
                state.status = 'loading';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.data = null;
                state.status = 'error';
            });
    },
});

export const authReducer = authSlice.reducer;
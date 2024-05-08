import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

type LoginType = {
    email: string,
    password: string
}

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params: LoginType) => {
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
            .addCase(fetchAuth.pending, (state) => {
                state.data = null;
                state.status = 'loading';
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.data = null;
                state.status = 'error';
            });
    },
});

export const authReducer = authSlice.reducer;
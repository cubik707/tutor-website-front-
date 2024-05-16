import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export interface UserType {
    createdAt: string;
    email: string;
    fullName?: string;
    avatarUrl?: string;
    isAdmin: boolean;
    updatedAt: string;
    __v: number;
    _id: string;
}


const initialState: { items: UserType[], status: string } = {
    items: [],
    status: "loading"
};

export const fetchUsers = createAsyncThunk('users/fetchUsers',
    async () => {
        const {data} = await axios.get('/users');
        return data;
    }
)

export const fetchRemoveUsers = createAsyncThunk('users/fetchRemoveUsers',
    async (id) => {
        await axios.delete(`/users/${id}`)
    }
);

export const fetchUpdateUser = createAsyncThunk(
    'users/updateUser',
    async ({ id, fullName, email }: { id: string, fullName: string|undefined, email: string }) => {
        const response = await axios.patch(`/users/${id}`, { fullName, email });
        return response.data;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            })
            .addCase(fetchRemoveUsers.pending, (state, action) => {
                const id = action.meta.arg;
                if (typeof id !== 'undefined') {
                    state.items = state.items.filter(obj => obj._id !== id);
                }
                state.status = 'loading';
            })
            .addCase(fetchRemoveUsers.fulfilled, (state) => {
                state.status = 'loaded';
            })
            .addCase(fetchUpdateUser.fulfilled, (state, action) => {
                const index = state.items.findIndex(user => user._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
    },
});

export const usersReducer = usersSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios.ts";

// Тип для данных о репетиторе
type TutorType = {
    user: {
        fullName: string;
        avatarUrl: string;
    }
    subjects: string[]
    pricePerHour: number
    location?: string
    rating: number
    qualification?: string
    teachingFormat: string
    description?: string
    resume?: {
        experience: string;
        education: string;
    }
    certificates?: string[]
}

// Тип для начального состояния
type TutorStateType = {
    items: TutorType[];
    status: 'loading' | 'loaded' | 'error';
}

const initialState: TutorStateType = {
    items: [],
    status: "loading",
};

export const fetchTutors = createAsyncThunk('tutors/fetchTutors',
    async () => {
        const { data } = await axios.get('/tutors');
        return data;
    }
);

const tutorsSlice = createSlice({
    name: 'tutors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTutors.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchTutors.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchTutors.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            });
    },
});

export const tutorsReducer = tutorsSlice.reducer;

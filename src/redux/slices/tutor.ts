import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios.ts";
import {RootState} from "../store.ts";

// Тип для данных о репетиторе
export type TutorType = {
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
        experience: string
        education: string
    }
    certificates?: string[]
}

// Тип для начального состояния
type TutorStateType = {
    items: Array<TutorType>
    status: 'loading' | 'loaded' | 'error'
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

export const fetchTutorsCreate = createAsyncThunk('tutors/fetchTutorsCreate',
    async (params: TutorType) => {
        const { data } = await axios.post('/tutors/create', params);
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
            })
            .addCase(fetchTutorsCreate.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchTutorsCreate.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchTutorsCreate.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            })
    },
});

export const selectTutor = (state: RootState) => state.tutor;
export const tutorsReducer = tutorsSlice.reducer;

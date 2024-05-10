import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios.ts";

// Тип для данных о репетиторе
type TutorApplicationType = {
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
type TutorApplicationStateType = {
    items: TutorApplicationType[]
    status: 'loading' | 'loaded' | 'error'
}

const initialState: TutorApplicationStateType = {
    items: [],
    status: "loading",
};

// type TutorApplicationParams = {
//     subjects: string[]
//     pricePerHour: number
//     location?: string
//     qualification?: string
//     additionalInfo?: string
// };

export const fetchTutorApplication = createAsyncThunk('tutorApplication/fetchTutorApplication',
    async (params: TutorApplicationType) => {
        const { data } = await axios.post('/tutorApplication/create', params);
        return data;
    }
);

const tutorApplicationSlice = createSlice({
    name: 'tutorApplication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTutorApplication.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchTutorApplication.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchTutorApplication.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            });
    },
});

export const tutorApplicationReducer = tutorApplicationSlice.reducer;

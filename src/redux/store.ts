import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reviewsReducer} from "./slices/review.ts";
import {authReducer} from "./slices/auth.ts";
import {tutorsReducer} from "./slices/tutor.ts";
import {tutorApplicationReducer} from "./slices/tutorApplication.ts";
import {usersReducer} from "./slices/user.ts";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
        reviews: reviewsReducer,
        auth: authReducer,
        tutor: tutorsReducer,
        tutorApplication: tutorApplicationReducer,
        users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
        reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
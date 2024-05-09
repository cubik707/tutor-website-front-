import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reviewsReducer} from "./slices/review.ts";
import {authReducer} from "./slices/auth.ts";
import {tutorsReducer} from "./slices/tutor.tsx";

const rootReducer = combineReducers({
        reviews: reviewsReducer,
        auth: authReducer,
        tutor: tutorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
        reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
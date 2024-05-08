import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reviewsReducer} from "./slices/review.ts";

const rootReducer = combineReducers({
        reviews: reviewsReducer,

});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
        reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
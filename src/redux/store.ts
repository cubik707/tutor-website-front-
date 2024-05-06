import {configureStore} from "@reduxjs/toolkit";
import {reviewsReducer} from "./slices/review.ts";

const store = configureStore({
        reducer: {
                reviews: reviewsReducer
        }
});

export default store;

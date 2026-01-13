import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";
import gptSearchSliceReducer from "./gptSearchSlice";

const appStore = configureStore({
    reducer : {
        user: UserSliceReducer,
        movies: moviesSliceReducer,
        gptSearch: gptSearchSliceReducer
    }
})

export default appStore;
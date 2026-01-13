import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
      nowPlaying : null,
      trailerInfo:null
    },
    reducers:{
        addNowPlaying :(state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailerInfo : (state, action) => {
            state.trailerInfo = action.payload
        }

    }
})

export const { addNowPlaying, addTrailerInfo} = moviesSlice.actions;
export default moviesSlice.reducer;
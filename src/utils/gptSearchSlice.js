import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice =createSlice({
    name:"gptSearch",
    initialState: {
        search:"",
        showGptSearch : true,
        gptMovies:[],
        gptResults:null
    },
    reducers:{
        handleSearch:(state, action) => {
            state.search = action.payload
        },
        handleShowGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        handleGptMovies:(state, action)=>{
          state.gptMovies = action.payload.gptMovies
          state.gptResults = action.payload.suggestions
        }
    }
})
export const {handleSearch, handleShowGptSearch, handleGptMovies} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
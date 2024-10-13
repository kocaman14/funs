import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./features/songSlice"
import movieReducer from "./features/movieSlice"




export const store = configureStore({
  reducer:{
    song:songReducer,
    movie:movieReducer,
  
  }  
})
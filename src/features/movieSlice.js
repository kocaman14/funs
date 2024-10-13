import { createSlice } from "@reduxjs/toolkit";





const initialState={
    moviePlayList : []
}
const movieSlice=createSlice({
name:"movie",
initialState,
reducers:{
    addMovie: (state, action) => {
        const{movies} = action.payload
        const seconRandomNumber=Math.floor(Math.random() * movies.length)
        const newMovie =movies[seconRandomNumber]
        
        if (!state.moviePlayList.find((movie) => movie.name === movie)) {
            state.moviePlayList.push({ name: newMovie, id: crypto.randomUUID() });
        }
    },
    removeMovie: (state, action) => {
        state.moviePlayList = state.moviePlayList.filter(movie => movie.id !== action.payload);
    },
    removeAllMovies: (state) => {
        state.moviePlayList = []; 
    },
    

}

})


export const { addMovie,removeMovie,removeAllMovies } = movieSlice.actions

export default movieSlice.reducer
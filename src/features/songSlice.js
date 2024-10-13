import { createSlice } from "@reduxjs/toolkit";





const initialState={
    songPlaylist : []
}
const songSlice=createSlice({
name:"song",
initialState,
reducers:{
    addSong: (state, action) => {
        const{songs} = action.payload
        const randomNumber=Math.floor(Math.random() * songs.length)
        const music =songs[randomNumber]
        console.log(music)
        if (!state.songPlaylist.find((song) => song.name === music)) {
            state.songPlaylist.push({ name: music, id: crypto.randomUUID() });
        }
    },
    removeSong: (state, action) => {
        state.songPlaylist = state.songPlaylist.filter(song => song.id !== action.payload);
    },
    removeAllSongs: (state) => {
        state.songPlaylist = []
    },
    

}

})


export const { addSong,removeSong,removeAllSongs } = songSlice.actions

export default songSlice.reducer
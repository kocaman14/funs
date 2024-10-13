
import { useDispatch, useSelector } from 'react-redux';
import MoviePlayList from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { removeAllSongs} from "./features/songSlice";
import {removeAllMovies} from "./features/movieSlice"

 
export default function App() {
    const dispatch = useDispatch(); 
    const handleClear = () => {
        dispatch(removeAllSongs()); 
        dispatch(removeAllMovies());
    };

    return (
        <div className='container'>
            <button className="add-button" onClick={handleClear}>Listeleri temizle</button>
            <br />
            <SongPlaylist />
            <br />
            <MoviePlayList />
        </div>
    );
}


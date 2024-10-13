import { useDispatch, useSelector } from "react-redux"
import { addMovie,removeMovie } from "../features/movieSlice"
import movies from "../movies"
import "../SongPlaylist.css"


function MoviePlayList() {
const{moviePlayList}=useSelector((state)=>state.movie)
 const dispatch = useDispatch()


 const renderedMovies = moviePlayList.map((movie) => {
  return (
      <li key={movie.id} className="song-item">
        <span className="song-name">{movie.name}</span>  
          <button onClick={() => dispatch(removeMovie(movie.id))}  className="remove-button">
              X
          </button>
      </li>
  );
});


  

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle'>Film Listesi</h3>
        <div className='buttons'>
          <button
            onClick={() => dispatch(addMovie({movies}))}
            className="add-button"
          >
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul className="song-list">{renderedMovies}</ul>
    </div>
  )
}

export default MoviePlayList

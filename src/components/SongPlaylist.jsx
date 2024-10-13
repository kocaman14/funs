import { useDispatch, useSelector } from "react-redux"
import { addSong,removeSong } from "../features/songSlice"
import songs from "../songs"
import "../SongPlaylist.css"


function SongPlaylist() {
const{songPlaylist}=useSelector((state)=>state.song)
 const dispatch = useDispatch()


 const renderedSongs = songPlaylist.map((song) => {
  return (
      <li key={song.id} className="song-item">
         <span className="song-name"> {song.name} </span> 
          <button  className="remove-button" onClick={() => dispatch(removeSong(song.id))}>
              X
          </button>
      </li>
  );
});


  

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle'>Şarkı Listesi</h3>
        <div className='buttons'>
          <button
            onClick={() => dispatch(addSong({songs}))}
            className="add-button"
          >
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul className="song-list">{renderedSongs}</ul>
    </div>
  )
}

export default SongPlaylist

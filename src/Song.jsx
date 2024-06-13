export const Song = ({ title, duration, artist, id, onDelete, onMove, inPlayList, moveDown, onDel }) => {

    return <div className="song">
      <p>{title}</p>
      <strong>By {artist} </strong>
      <small>{duration} mins </small>
      {!inPlayList && <button className="delete" onClick={() => onDelete(id)}>Delete</button>}
      {
        inPlayList && <button className="delete" onClick={() => onDel(id)}>Delete</button>
      }
      {!inPlayList && <button className="move" onClick={() => onMove(id)}>Move</button>}
      {
        inPlayList && <button className="move" onClick={() => moveDown(id)}>Move Down</button>
      }
  
    </div>
  }
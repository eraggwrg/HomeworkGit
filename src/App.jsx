import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Song } from './Song'
import { SongList } from './Songlist'
import { Playlist } from './Playlist'



function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Symphony No.40", artist: "Mozart", duration: 30 },
    { id: 102, title: "mi ban asem ches havata", artist: "Tata Simonyan", duration: 2.4 },
    { id: 103, title: "ur vor gnas", artist: "Tigran Jamkochyan", duration: 5.2 },
    { id: 104, title: "Requiem for a dream", artist: "Mozart", duration: 3 },
  ])

  const [favSongs, setFavSongs] = useState([

  ])

  const pl = [...favSongs]

  const removeSong = (id) => {
    setSongs(songs.filter(x => x.id != id))
  }
  const removeFav = (id) => {
    setFavSongs(favSongs.filter(x => x.id != id))
  }
  const moveSong = (id) => {
    const item = songs.find(x => x.id == id)
    pl.includes(item) ? pl : pl.push(item)
    setFavSongs(pl)
  }
  const moveDown = (id) => {
    let item = pl.findIndex(x => x.id == id)

    if (item >= pl.length - 1) {
      item = 0
    }
    else {
      [pl[item], pl[item + 1]] = [pl[item + 1], pl[item]]
    }
    setFavSongs(pl)

  }
  return (
    <>
      <div className="row" >
        <SongList
          items={songs}
          onDelete={removeSong}
          onMove={moveSong}
        />

        <Playlist
          items={favSongs}
          moveDown={moveDown}
          onDel={removeFav}

        />

      </div>

    </>
  )
}

export default App

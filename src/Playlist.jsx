import { Song } from "./Song"

export const Playlist = ({ items, moveDown, onDel }) => {
    return <div  >
        <h1>Playlist</h1>

        {
            items.map(elm => <Song key={elm.id}

                {...elm}
                inPlayList={true}
                moveDown={moveDown}
                onDel={onDel}
            />)
        }

    </div>
}
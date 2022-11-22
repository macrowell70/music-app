import './Setlist.css'
import { songs } from '../constants'

const Setlist = () => {
  return (
    <div>
        {songs.map(song => (
            <div key={song.id}>{`${song.title} - ${song.artist}`}</div>
        ))}
    </div>
  )
}

export default Setlist
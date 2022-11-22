import './Home.css'
import { Link } from 'react-router-dom'

import { setLists } from '../constants'

const Home = () => {
  return (
    <div>
        <h1>Sets</h1>
        {setLists.map(set => (
            <Link to="/set" key={set}>
                <h3>{`${set}`}</h3>
            </Link>
        ))}
    </div>
  )
}

export default Home
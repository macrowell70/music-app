import './styles/global.css'
import './styles/reset.css'
import './App.css'
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom'

import { Home, Setlist } from './components'

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/set" element={<Setlist />}/>
      </Routes>
  )
}

export default App

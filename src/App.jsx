import './App.css'
import { Routes, Route } from 'react-router-dom'

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

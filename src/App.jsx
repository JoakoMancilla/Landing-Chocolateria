import './App.css'
import Inicio from './pages/Inicio'
import Ventas from './pages/Ventas'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ventas" element={<Ventas />} />
      </Routes>
    </>
  )
}

export default App

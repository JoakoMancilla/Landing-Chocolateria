import './App.css'
import { ScrollToTop } from './componentes/ScrollTop'
import Inicio from './pages/Inicio'
import Ventas from './pages/Ventas'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ventas" element={<Ventas />} />
      </Routes>
    </>
  )
}

export default App

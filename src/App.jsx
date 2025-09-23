import { useState } from 'react'
import './App.css'
import { HeroSec } from './componentes/HeroSec'
import { Carousel } from './componentes/Carousel'
import { Footer } from './componentes/Footer'
import { MapSec } from './componentes/MapSec'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <HeroSec/>
      <MapSec/>
      <Footer/>
    </>
  )
}

export default App

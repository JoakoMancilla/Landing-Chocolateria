import { useState } from 'react'
import './App.css'
import { HeroSec } from './componentes/HeroSec'
import { Carousel } from './componentes/Carousel'
import { Footer } from './componentes/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel/>
      <HeroSec/>
      <Footer/>
    </>
  )
}

export default App

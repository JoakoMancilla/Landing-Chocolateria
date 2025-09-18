import { useState } from 'react'
import './App.css'
import { HeroSec } from './componentes/HeroSec'
import { Carousel } from './componentes/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel/>
      <HeroSec/>
    </>
  )
}

export default App

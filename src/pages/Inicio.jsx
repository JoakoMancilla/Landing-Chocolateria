import React from 'react'
import { HeroSec } from '../componentes/Inicio/HeroSec'
import { MapSec } from '../componentes/Inicio/MapSec'
import { Footer } from '../componentes/Footer'
import { Nav } from '../componentes/Nav'

function Inicio() {
  return (
    <>
    <Nav/>
    <HeroSec/>
    <MapSec/>
    <Footer/>
    </>
  )
}

export default Inicio
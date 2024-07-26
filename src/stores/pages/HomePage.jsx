

import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/Products'
import Carusel from '../components/carousel/CarouselPage'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Carusel/>
        <Products />
    </div>
  )
}

export default LandingPage
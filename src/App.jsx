

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './stores/pages/HomePage'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './stores/singles/ComputerSingle'
import MenSingle from './stores/singles/MenSingle'
import WomanSingle from './stores/singles/WomanSingle'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <HomePage />}/>
        
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
                 
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />

      <Route path='/computers/:id' element = {<ComputerSingle />} />
    
     
      <Route path='/men/:id' element = {<MenSingle />} />
     
      <Route path='/woman/:id' element = {<WomanSingle />} />
   
      </Routes>
    </div>
  )
}

export default App
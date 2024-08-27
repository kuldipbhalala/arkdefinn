import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import { ContextArk } from './components/context/Context_ark'
import SunDryFoods from './components/SunDryFoods'
import Briefabout from './components/Briefabout'
import Training from './components/Training'
import Vision from './components/Vision'
import ForensicScience from './components/ForensicScience'
import Hydrogen from './components/Hydrogen'
import Oxygen from './components/Oxygen'
import ForensicToxicology from './components/ForensicToxicology'
import NanoForensics from './components/NanoForensics'
import GIS from './components/GIS'
import Contact from './components/Contact'
 
const App = () => {
  return (
    <div>
      <ContextArk>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SunDryFoods' element={<SunDryFoods />} />
            <Route path='/Briefabout' element={<Briefabout />} /> 
            <Route path='/Training' element={<Training />} /> 
            <Route path='/Vision' element={<Vision />} /> 
            <Route path='/ForensicScience' element={<ForensicScience />} /> 
            <Route path='/Hydrogen' element={<Hydrogen />} />
            <Route path='/Oxygen' element={<Oxygen />} />
            <Route path='/ForensicToxicology' element={<ForensicToxicology />} />
            <Route path='/NanoForensics' element={<NanoForensics />} />
            <Route path='/GIS' element={<GIS />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ContextArk>
    </div>
  )
}

export default App
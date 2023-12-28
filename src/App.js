
import React from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Mission from './pages/Mission'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from './pages/Background'
import Sponsors from './pages/Sponsors'

const App = () => {
  return (
    <BrowserRouter>
     <Navigation/>
    <Routes>
    <Route path="/" element={<Navigation />}/>  
    <Route index element={<Home />}/>      
    <Route path="vision" element={<Vision/>} />
    <Route path="mission" element={<Mission/>} />
    <Route path="background" element={<Background/>} />
    <Route path="sponsors" element={<Sponsors/>} />
       {/*    <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
      </BrowserRouter>
  )
}

export default App

import React from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Mission from './pages/Mission'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from './pages/Background'
import Sponsors from './pages/Sponsors'
import Education from './pages/Education'
import Cultivation from './pages/Cultivation'
import Climate from './pages/Climate'
import Donation from './pages/Donation'
import Footer from './components/Footer'

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
    <Route path="education" element={<Education/>} />
    <Route path="cultivation" element={<Cultivation/>} />
    <Route path="climate-action" element={<Climate/>} />
    <Route path="donation" element={<Donation/>} />
       {/*    <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
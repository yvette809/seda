import React from 'react'
import MyCarousel from '../components/MyCarousel'
import Achievement from '../components/Achievement'
import {Button} from 'react-bootstrap'

/* const Home = () => {
  return (
    <>
    <div className='container home d-flex mt-3 justify-content-between '>
        <div className="intro pt-3">
            <h1>We Can Help Your <br/> Garden Blossom</h1>
            <p className='mt-4'>We are a non-profit organisation that helps in preserving the ecosytem by planting of trees and organising
            worshops to educate rural farmers on environmental conservation
        </p>
    
        <Button variant="success" className='mt-4' >Join The Movement</Button>
        </div>
       
       <div className="bg-img">
        <MyCarousel/>
       </div>

        </div>
          <Achievement/>
        
          </>
  )
}

export default Home */

const Home = () => {
  return (
    <>
    <div className='container home  mt-3 '>
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
      
        <div className="intro pt-3 col">
            <h1>We Can Help Your <br/> Garden Blossom</h1>
            <p className='mt-4'>We are a non-profit organisation that helps in preserving the ecosytem by planting of trees and organising
            worshops to educate rural farmers on environmental conservation
        </p>
    
        <Button variant="success" className='mt-4 home-btn' >Join The Movement</Button>
        </div>
       
       <div className="bg-img">
        <MyCarousel/>
       </div>
       </div>
        </div>
          <Achievement/>
        
          </>
  )
}

export default Home
import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const DonationBanner = () => {
  return (
    <div className="container-fluid text-white donation-banner mt-3">
        <h3>Please Join Us To Give Our Community A Better Life</h3>
        <p>Just Like Muhammed Ali said "Service To Others Is The Rent You Pay Here On Earth"</p>
        <Link to="/donate"><Button className='text-align-center' variant='success'>Let's Donate</Button></Link>
    </div>
  )
}

export default DonationBanner
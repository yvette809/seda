import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const DonationBanner = ({title1, title2,action}) => {
  return (
    <div className="container-fluid text-white donation-banner mt-3">
        <h3>{title1 && title1}</h3>
        <p>{title2}</p>
        <Link to="/donate"><Button className='text-align-center' variant='success'>{action}</Button></Link>
    </div>
  )
}

export default DonationBanner
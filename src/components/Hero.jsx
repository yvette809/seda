import React from 'react'

const Hero = ({image1, image2,title, description}) => {
  return (
    <div className='container mt-3'>
        <div className="row">
        <div className='hero-img col-lg-6'>
           <img src={image1} alt="background-img" className='img-1'/>
           {image2 && <img src={image2} alt="background-img" className='img-2' />}
        </div>
        <div className="hero-description col-lg-6">
            <h1 className='title'>{title}</h1>
            <p className='text-muted'>{description}</p>
        </div>
           
        </div>
       
       

    </div>
  )
}

export default Hero
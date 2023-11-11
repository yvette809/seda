import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/IMG-20221217-WA0060.jpg'
import img2 from '../assets/IMG-20230223-WA0016~2.jpg'
import img3 from '../assets/IMG-20230303-WA0009.jpg'
import img4 from '../assets/IMG_20220513_122138.jpg'
import img5 from '../assets/IMG_20220804_114543.jpg'

const MyCarousel = () => {
    return (
      <Carousel >
        <Carousel.Item>
          <img
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
           
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
           
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
           
            src={img5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  };
  
  export default MyCarousel
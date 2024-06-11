
import React from 'react'

import "./Hero.css"
import darkarrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
      
      <div className='hero-text'>
        <h1>We Ensure Better Education For A Better World!</h1>
        <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. consectetur adipisicing elit. ipsa eius quisquam possimus repellendus!

        </p>
        <button className='btn'>Explore more
          <img src={darkarrow} alt='arrow'></img>
        </button>

      </div>
    
    </div>
  )
}

export default Hero

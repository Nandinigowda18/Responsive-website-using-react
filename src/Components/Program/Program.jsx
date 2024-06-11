import React from 'react'
import './Program.css'
import img1 from '../../assets/program-1.png'
import img2 from '../../assets/program-2.png'
import img3 from '../../assets/program-3.png'

import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'

const Program = () => {
  return (
  <div className='container'>

      <div className='programs'>
        <div className='program'>
            <img src= {img1} alt='photo'></img>
            <div className='caption'>
                <img src={icon1} alt='caption'></img>
                <p>graduation degree</p>
            </div>
        </div>
        <div className='program'>
            <img src= {img2} alt='photo'></img>
            <div className='caption'>
                <img src={icon2} alt=''></img>
                <p>Master degree</p>
            </div>
        </div>
        <div className='program'>
            <img src= {img3} alt='photo'></img>
            <div className='caption'>
                <img src={icon3} alt=''></img>
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Program

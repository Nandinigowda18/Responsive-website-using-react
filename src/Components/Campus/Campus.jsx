import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import arrow from '../../assets/next-icon.png'

const Campus = () => {
  return (
    <div className='container'>
    <div className='campus'>
    <div className='gallery'>
            <img src={gallery1 } ></img>
            <img src={gallery2 } ></img>
            <img src={gallery3} ></img>
            <img src={gallery4 } ></img>

        </div>
        <button className='btn dark-btn' >See More Here <img src={arrow}></img></button>
    </div>

    </div>
  )
}

export default Campus

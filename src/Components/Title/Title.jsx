import React from 'react'
import './Title.css'

const Title = ({title,subtitle}) => {
  return (
  <div className='container'> 
      <div className='title'>
        <p>{subtitle}</p>
        <h1> {title}</h1>
      
    </div>
  </div>
  )
}

export default Title



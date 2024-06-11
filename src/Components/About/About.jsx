import React from 'react'
import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='container'>
        <div className='about'>
            <div className='about-left'>
                <img src={about_image} className='about_image' ></img>
                <img src={play_icon} className='play_icon'></img>

            </div>
        <div className='about-right'>
   <h3>ABOUT UNIVERSITY</h3>
   <h2>Nurturing Tomorrow's Leaders Today</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit placeat vero eos, officia eveniet consectetur aliquam repellat architecto dolorum suscipit 
  in? Eius laudantium placeat dolore.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam ex fugit ea laudantium labore, possimus libero amet, nostrum, delectus
  veniam? Dignissimos, udantium doloremque distinctio.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem magni adipisci nihil iusto explicabo molestias quia quibusdam libero 
  perferendis sequi, saepe laudantium placeat quod tempora!</p>


        </div>
        </div>
      
    </div>
  )
}

export default About

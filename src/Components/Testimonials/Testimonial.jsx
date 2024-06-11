import React from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef } from 'react'


const Testimonials = () => {
//logic for slide
const slider = useRef();
let tx=0

const forwardslide=()=>{


   if(tx > -70){
    tx-=38;
   }
   slider.current.style.transform = `translateX(${tx}%)`

}
const backwardslide=()=>{
  
 
    if(tx < 0){
     tx += 38;
    }
    slider.current.style.transform =`translateX(${tx}%)`
 
 }


  return (
    <div className='container'>
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-icon' onClick={forwardslide}></img>
            <img src={back_icon} alt='' className='back-icon' onClick={backwardslide}></img>
            <div className='slider'>
               <ul>
              
                <li>
                    <div className='slide'>
                       <div className='info'>
                       <img src={user1}></img>
                        <div>
                            <h3>william</h3>
                            <span>usa</span>
                        </div>
                       </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum eos 
                            facilis voluptate consequatur officiis, autem a nam
                             delectus quos enim omnis, expedita laboriosam dolorem qui impedit!
                              Reiciendis, corrupti neque!</p>

                    </div>
                </li>

                <li>
                    <div className='slide'>
                       <div className='info'>
                       <img src={user2}></img>
                        <div>
                            <h3>william</h3>
                            <span>usa</span>
                        </div>
                       </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum eos 
                            facilis voluptate consequatur officiis, autem a nam
                             delectus quos enim omnis, expedita laboriosam dolorem qui impedit!
                              Reiciendis, corrupti neque!</p>

                    </div>
                </li>

                <li>
                    <div className='slide'>
                    <div className='info'>
                       <img src={user3}></img>
                        <div>
                            <h3>william</h3>
                            <span>usa</span>
                        </div>
                       </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum eos 
                            facilis voluptate consequatur officiis, autem a nam
                             delectus quos enim omnis, expedita laboriosam dolorem qui impedit!
                              Reiciendis, corrupti neque!</p>

                    </div>
                </li>

                <li>
                    <div className='slide'>
                    <div className='info'>
                       <img src={user4}></img>
                        <div>
                            <h3>william</h3>
                            <span>usa</span>
                        </div>
                       </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum eos 
                            facilis voluptate consequatur officiis, autem a nam
                             delectus quos enim omnis, expedita laboriosam dolorem qui impedit!
                              Reiciendis, corrupti neque!</p>

                    </div>
                </li>


               </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonials

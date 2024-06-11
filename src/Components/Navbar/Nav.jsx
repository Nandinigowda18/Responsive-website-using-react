
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import "./Nav.css"
import { Link, ScrollLink } from 'react-scroll'
<nav></nav>


const Nav = () => {

  const [sticky,setSticky]= useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>100 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
   <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
   
   <img to='home' src={Logo} className='logo'></img>
   <ul>
    <li><Link to='hero' smooth={true} offset={0} duration={500} > HOME</Link>  </li>
    <li><Link to='program' smooth={true} offset={-250} duration={500} > PROGRAMS</Link>  </li>
    <li><Link to='about' smooth={true} offset={-170} duration={500} > ABOUT US</Link>  </li>
    <li><Link to='campus' smooth={true} offset={-290} duration={500} >  CAMPUS</Link> </li>
    <li><Link to='testimonials' smooth={true} offset={-290} duration={500} > TESTIMONIALS</Link></li>

  
    <li> <Link  to='contact' smooth={true} offset={-221} className='btn nav-btn'> CONTACT US</Link> </li>
 
   </ul>

    
   
   </nav>
  )
}

export default Nav


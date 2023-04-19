import React from 'react'
import './nav.css';
import Logo from '../../assets/Food.png'

const Navbar = () => {
  return (
    <div class='container-fluid px-5 py-1 d-flex bg-white position-fixed
    gap-5 mt-1 align-items-center justify-content-between' id='nav-container'>
     <div id='logo-container' className='d-flex align-items-center gap-3'>
      <img src={Logo} id='logo' />
      <h6>Food App</h6>
     </div>
     <div class='d-flex gap-4'>
      <div><a href='#' className='nav-links'>Home</a></div>
      <div><a href='#about' className='nav-links'>About</a></div>
      <div><a href='#contact' className='nav-links'>Contact</a></div>
      <div><a href='#vision' className='nav-links'>Vision</a></div>
      <div><a href='#values'className='nav-links' >Values</a></div>
      <div><a href='#testimonials' className='nav-links'>Testimonials</a></div>
     </div>
    </div>
  )
}

export default Navbar;
import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './nav.css';
import Logo from '../../assets/Food.png';
import { GiCancel } from 'react-icons/gi'


const Navbar = () => {
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  }

  const hideDropdown = () => {
    setShow(false);
  }
  return (
    <div class='container-fluid px-5 py-1 d-flex bg-white position-fixed nav-bar
    gap-5 mt-1 align-items-center justify-content-between' id='nav-container'>
     <div id='logo-container' className='d-flex align-items-center gap-3'>
      <img src={Logo} id='logo' />
      <h6>Food App</h6>
     </div>
     <div class='gap-4 desktop-nav'>
      <div><a href='#' className='nav-links'>Home</a></div>
      <div><a href='#about' className='nav-links'>About</a></div>
      <div><a href='#contact' className='nav-links'>Contact</a></div>
      <div><a href='#vision' className='nav-links'>Vision</a></div>
      <div><a href='#values'className='nav-links' >Values</a></div>
      <div><a href='#testimonials' className='nav-links'>Testimonials</a></div>
     </div>

     <div className='mobile-nav' onClick={showDropdown}>
      <FaBars />
      {show ? (
          <div className='mobile-nav-links bg-white p-3 container-fluid'>
          <div className='cancel-button justify-content-right'
          data-aos="fade-right" data-aos-delay="500" 
          data-aos-duration="1500">
          <GiCancel size={30} onClick={hideDropdown}/>
          </div>
          <div className='nav-links'><a href='#' >Home</a></div>
          <div><a href='#about' className='nav-links'>About</a></div>
          <div><a href='#contact' className='nav-links'>Contact</a></div>
          <div><a href='#vision' className='nav-links'>Vision</a></div>
          <div><a href='#values'className='nav-links' >Values</a></div>
          <div><a href='#testimonials' className='nav-links'>Testimonials</a></div>
          </div>)
      : null}
     </div>
    </div>
  )
}

export default Navbar;
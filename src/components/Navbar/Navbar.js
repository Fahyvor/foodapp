import React from 'react'
import './nav.css';
import Logo from '../../assets/Food.png'

const Navbar = () => {
  return (
    <div class='container mx-4 d-flex bg-white
    gap-5 mt-1 align-items-center justify-content-between' id='nav-container'>
     <div id='logo-container' className='d-flex align-items-center gap-3'>
      <img src={Logo} id='logo' />
      <h6>Food App</h6>
     </div>
     <div class='d-flex gap-4'>
      <div><a>Home</a></div>
      <div><a>About</a></div>
      <div><a>Contact</a></div>
      <div><a>Vision</a></div>
      <div><a>Value</a></div>
      <div><a>Testimonials</a></div>
     </div>
    </div>
  )
}

export default Navbar;
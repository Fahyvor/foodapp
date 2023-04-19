import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container p-1 text-center text-white'>
     <p>Developed by Elrey &copy;{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
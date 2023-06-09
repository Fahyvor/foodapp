import React from 'react'
import './contact.css'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='p-3 pt-5' id='contact'>
     <div className='contact-text'>
      <h1 className='contact-header'>Contact</h1>
      <p>00 Lorem Ipsum Street, Off Ipsum, <br /> Lorem Ipsum.</p>
      <p>+1234567890</p>
     </div>
     <div className='gap-4 d-flex justify-content-end mx-4'>
      <a href=''><BsFacebook size={30} className='icon-class'/></a>
      <a href=''><AiFillTwitterCircle size={30} className='icon-class'/></a>
      <a href=''><AiFillInstagram size={30} className='icon-class'/></a>
      <a href=''><RiWhatsappFill size={30} className='icon-class'/></a>
      <a href=''><MdEmail size={30} className='icon-class'/></a>
      <a href=''><BsLinkedin size={30} className='icon-class'/></a>
     </div>
    </div>
  )
}

export default Contact
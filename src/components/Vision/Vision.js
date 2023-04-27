import React from 'react'
import './vision.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Vision = () => {
  return (
    <div className='vision-container pt-5 pb-4' id='vision'>
     <div className='mt-4 text-center text-white'>
      <h1>Why Choose Us</h1>
      <div className='empty-line-vision mx-auto bg-white text-white'></div>
     </div>
     <div className='vision-rows d-flex justify-content-around mt-5'>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
     </div>

     <div className='vision-rows d-flex justify-content-around mt-5'>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
     </div>

     <div className='vision-rows d-flex justify-content-around mt-5'>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
      <div className='d-flex gap-3
       mx-4 vision-elements
      text-white'>
        <BsPatchCheckFill color='white'/>
       <h4 className='vision-element'>Lorem Ipsum</h4>
      </div>
     </div>
    </div>
  )
}

export default Vision
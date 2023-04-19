import React from 'react'
import './body.css';
import Food from '../../assets/Food.png'
import Background from '../../assets/background.jpeg'

const Body = () => {
  return (
   <>
    <div id='body-container' className='d-flex p-2 pt-4 justify-content-around py-4'>
     <div id='left-side' className='my-auto'>
      <h1 className='text-white company-name'>Lorem Ipsum</h1>
      <div className='text-white flex-column'>
       <p className='company-goals'>Lorem Ipsum, Lorem Ipsum</p>
       <p className='company-goals'>Lorem Ipsum, Lorem Ipsum</p>
      </div>
      <div id='order-buttons' className='d-flex gap-4 mx-2'>
       <div className='br-4 align-items-center
       p-3 px-5 text-white' id='place_order' ><a>Place Order</a></div>
       <div className='align-items-center bg-white p-3 px-5 contact-us'><a>Contact Us</a></div>
      </div>
     </div>
     <div id='right-side'>
     <img src={Food} id='image-right'/>
     </div>
    </div>
    <img src={Background} id='background-image'/>
    </>
  )
}

export default Body
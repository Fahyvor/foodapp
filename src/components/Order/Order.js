import React from 'react'
import './order.css'
import OrderImage from '../../assets/Order.jpg'

const Order = () => {
  return (
    <div className='container-fluid order-container d-flex
     pt-3 pb-3 align-items-center
    justify-content-around'>
     <div className='order-image-container mt-3 mx-3'>
      <img src={OrderImage} className='order-image mt-1'/>
     </div>
     <div className='order-writeup'>
      <h1 className='text-white text-center order-text'><a>
        ORDER a <br/>Pot/Plate <br/> from US
        </a>
      </h1>
     </div>
    </div>
  )
}

export default Order
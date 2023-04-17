import React from 'react'
import './order.css'
import OrderImage from '../../assets/Order.jpeg'

const Order = () => {
  return (
    <div className='container-fluid order-container d-flex
    gap-4 pt-3 pb-5
    justify-content-around'>
     <div className='order-image-container mt-3'>
      <img src={OrderImage} className='order-image mt-1'/>
     </div>
     <div className='order-writeup'>
      <h1 className='text-white text-center order-text'>
        ORDER a <br/>Pot/Plate <br/> from US
        </h1>
     </div>
    </div>
  )
}

export default Order
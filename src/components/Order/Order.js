import React from 'react'
import './order.css'
import OrderImage from '../../assets/Order.jpeg'

const Order = () => {
  return (
    <div className='order-container d-flex
    gap-4 pt-3 pb-4
    justify-content-around'>
     <div className='order-image'>
      <img src={OrderImage} />
     </div>
     <div className='order-writeup'>

     </div>
    </div>
  )
}

export default Order
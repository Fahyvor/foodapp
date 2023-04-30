import React from 'react'
import './values.css'

const values = () => {
  return (
    <div className='bg-white pt-5 pb-5 container-values' id='values'>
     <h5 className='text-center core-values'>OUR CORE VALUES </h5>
     <div className='empty-line mx-auto'></div>
     <div className='values d-flex justify-content-around container-for-values mt-4'>
      <div className='p-3 px-5 br-3 bg-white values-container text-center mt-5'
      data-aos="fade-up" data-aos-delay="500" 
      data-aos-duration="1500">
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
      </div>
      <div className='p-3 px-5 br-3 bg-white text-center mt-5 values-container-middle'
      data-aos="fade-up" data-aos-delay="500" 
      data-aos-duration="1500">
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
      </div>
      <div className='p-3 px-5 br-3 bg-white text-center values-container mt-5'
      data-aos="fade-up" data-aos-delay="500" 
      data-aos-duration="1500">
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
       <p>Lorem Ipsum</p>
      </div>
     </div>
    </div>
  )
}

export default values
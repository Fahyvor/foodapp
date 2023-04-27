import React from 'react'
import './table.css'
import TableImage from '../../assets/table.jpg'

const Table = () => {
  return (
    <div className='mt-4 pb-3 align-items-center table-container
    justify-content-center d-flex'>
      <div className='table-left text-center text-white'>
        <a className='text-center book-table'><h1 className='book-table'>Book A <br /> Table</h1></a>
      </div>
      <div className='table-right' data-aos="fade-up" data-aos-delay="500" 
      data-aos-duration="1500">
      <img src={TableImage} className='table-image'/>
      </div>
    </div>
  )
}

export default Table
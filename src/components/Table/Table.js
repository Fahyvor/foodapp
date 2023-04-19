import React from 'react'
import './table.css'
import TableImage from '../../assets/table.jpg'

const Table = () => {
  return (
    <div className='mt-4 pb-3 align-items-center table-container
    justify-content-center d-flex'>
      <div className='table-left text-center'>
        <a><h1 className='book-table'>Book A <br /> Table</h1></a>
      </div>
      <div className='table-right'>
      <img src={TableImage} className='table-image'/>
      </div>
    </div>
  )
}

export default Table
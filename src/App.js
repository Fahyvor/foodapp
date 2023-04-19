import React from 'react'
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import Values from './components/Values/values'
import Vision from './components/Vision/Vision'
import Order from './components/Order/Order'
import Table from './components/Table/Table'


const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Values />
      <Vision />
      <Testimonials />
      <Order />
      <Table />
    </div>
  )
}

export default App
import React from 'react'
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import Values from './components/Values/values'
import Vision from './components/Vision/Vision'
import Order from './components/Order/Order'


const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Values />
      <Vision />
      <Testimonials />
      <Order />
    </div>
  )
}

export default App
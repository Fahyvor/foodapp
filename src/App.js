import React, { useEffect } from 'react'
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import Values from './components/Values/values'
import Vision from './components/Vision/Vision'
import Order from './components/Order/Order'
import Table from './components/Table/Table'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div>
      <Navbar />
      <Body />
      <Values />
      <Vision />
      <Testimonials />
      <Order />
      <Table />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
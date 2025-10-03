import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Certificates from './sections/Certificates'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Chatbot from './sections/Chatbot'
import AllCertificates from './sections/AllCertificates'
import Explore from './sections/Explore'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='container mx-auto max-w-7xl'>
            <Navbar/>
            <div id="home">
              <Hero/>
            </div>
            <Chatbot/>
            <div id="about">
              <About/>
            </div>
            <div id="projects">
              <Projects/>
            </div>
            <div id="experiences">
              <Experiences/>
            </div>
            {/* <div id="testimonials">
              <Testimonials/>
            </div> */}
            <div id="certificates">
              <Certificates/>
            </div>
            <div id="contact">
              <Contact/>
            </div>
            <Footer/>
          </div>
        } />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import { motion } from "motion/react"

function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <button 
          onClick={() => scrollToSection('home')} 
          className="nav-link"
        >
          Home
        </button>
      </li>
      <li className='nav-li'>
        <button 
          onClick={() => scrollToSection('about')} 
          className="nav-link"
        >
          About
        </button>
      </li>
      <li className='nav-li'>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="nav-link"
        >
          Work
        </button>
      </li>
      <li className='nav-li'>
        <button 
          onClick={() => scrollToSection('certificates')} 
          className="nav-link"
        >
          Certificates
        </button>
      </li>
      <li className='nav-li'>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="nav-link"
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
            <div className='flex items-center justify-between py-2 sm:py-0'>
                <a 
                    href="/" 
                    className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
                >
                  Paras
                </a>
                <button onClick={() => setIsOpen(!isOpen)}
                        className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                            {/* Extra-small screens (<640px) → ✅ visible, Small and bigger screens (≥640px) → ❌ hidden */}
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                        alt="toggle" 
                        className='w-6 h-6'/>
                </button>
                <nav className='hidden sm:flex'>
                    <Navigation/>
                </nav>
            </div>
      </div>
      {isOpen && (
        <motion.div 
            className='block overflow-hidden text-center sm:hidden'
            initial={{opacity:0, x:-10}}
            animate={{opacity:1, x:0}}
            style={{maxHeight: "100vh"}}
            transition={{duration: 1}}
        >
            <nav className='pb-5'>
                <Navigation/>
            </nav>
      </motion.div>)}
      
    </div>
    
  )
}

export default Navbar

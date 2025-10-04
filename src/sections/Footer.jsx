import React from 'react'
import { mySocials } from '../constants'

const Footer = () => {
  return (
    <section className='w-full pb-3 text-sm text-neutral-400 c-space'>
        <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-4'/>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex gap-2 order-2 md:order-1'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3 order-1 md:order-2'>
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index} target='_blank' rel='noopener noreferrer'>
                        <img src={social.icon} alt={social.name} className='w-5 h-5'/>
                    </a> 
                ))}
            </div>
            <p className='order-3 text-center md:text-right w-full md:w-auto'>© 2025 Paras. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer

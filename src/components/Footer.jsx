import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-[#fdfdfd] w-full py-6 px-4 md:px-6'>
      <div className='max-w-[1100px] mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2'>
        <div className='text-center md:text-left'>
          <p className='text-xl font-bold py-2'>Tech Solution</p>
          <p className='text-gray-400'>A reliable tech service provider</p>
          <ul className='flex gap-4 py-2 justify-center md:justify-start cursor-pointer'>
            <li><BsFacebook size={35} /></li>
            <li><BsGithub  size={35} /></li>
            <li><BsLinkedin  size={35} /></li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <p className='text-xl font-bold py-2'>Services</p>
          <ul className='text-gray-400 cursor-pointer'>
            <li className='text-lg'>Development</li>
            <li className='text-lg'>Businesss Management</li>
            <li className='text-lg'>Digital Marketing</li>
            <li className='text-lg'>E-commerce Solution</li>
            <li className='text-lg'>Affiliate Marketing Solution</li>
            <li className='text-lg'>Ad Network Solution</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <p className='text-xl font-bold py-2'>Menu</p>
          <ul className='text-gray-400 cursor-pointer'>
            <li className='text-lg'>About Us</li>
            <li className='text-lg'>Contact Us</li>
            <li className='text-lg'>Services</li>
            <li className='text-lg'>Our Partners</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <p className='text-xl font-bold py-2'>Legal</p>
          <ul className='text-gray-400 cursor-pointer'>
            <li className='text-lg'>Terms of Use</li>
            <li className='text-lg'>Privacy Policy</li>
            <li className='text-lg'>Cookie Policy</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <p className='text-xl font-bold py-2'>Contact Us</p>
          <ul className='text-gray-400 cursor-pointer'>
            <li className='text-lg'>+8801685477114</li>
            <li className='text-lg'>web.faisal.bd@gmail.com</li>
            <li className='text-lg'>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      

    </div>
  )
}

export default Footer
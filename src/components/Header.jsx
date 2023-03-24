import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-primary p-4'>
      <div className='max-w-[1100px] py-[10px]  mx-auto flex justify-between items-center'>
        <div className='text-3xl font-bold'>
          Tech Solution
        </div>

        {
          toggle ? <AiOutlineClose className='text-white text-2xl md:hidden block cursor-pointer' onClick={()=>setToggle(!toggle)} /> : 
          <AiOutlineMenu className='text-white text-2xl md:hidden block cursor-pointer' onClick={()=>setToggle(!toggle)} />
        }
       

        <ul className='hidden md:flex text-white gap-5'>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* responsive menu  */}
        <ul className={`text-white md:hidden block fixed h-screen w-full bg-black top-[88px] ${toggle ? 'left-[0px]' : 'left-[-100%]'} duration-300`}>
          <li className='p-5'>Home</li>
          <li className='p-5'>Services</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
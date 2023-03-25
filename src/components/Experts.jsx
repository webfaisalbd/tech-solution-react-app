import React from 'react';
import expert from '../assets/expert.gif'

const Experts = () => {
    return (
        <div className='max-w-[1100px] mx-auto my-3 md:grid grid-cols-2'>
            <div className=' md:w-[100%] sm:w-[70%] mx-auto text-center'>
                <img className='' src={expert} alt="" />
            </div>
            <div className=' flex items-center'>
                <div>
                    <h2 className='text-primary font-bold text-2xl m-2'>BUILD FROM EXPERTS</h2>
                    <p className='m-2 text-xl text-justify'>Our cutting-edge technology is designed to empower companies to unlock their full potential and stay ahead of the curve. We are revolutionizing the tech-business ecosystem.</p>
                    <button className='bg-black text-white p-3 rounded m-2'>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Experts
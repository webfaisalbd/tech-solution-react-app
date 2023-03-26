import React from 'react';
import aboutCompany from '../assets/aboutCompany.gif';
import { AiOutlineCheck } from 'react-icons/ai';

const AboutCompany = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-10 py-[50px] px-6'>
                <div>
                    <h2 className='text-4xl font-bold mb-3'>We believe, one idea begets others, but one great idea stays stronger above all.</h2>
                    <p className='my-2 text-lg text-justify'>We provide AI-powered marketing-tech solutions. 360-degree solutions to simplify your business experience. Our solutions are purpose-driven, performance-oriented, and advised by respected industry experts. We stand out by launching the correct technology with proper communication integration</p>
                    <ul>
                        <li className='flex gap-2 items-center'> <AiOutlineCheck />Product Engineering</li>
                        <li className='flex gap-2 items-center'> <AiOutlineCheck />IT Consultancy</li>
                        <li className='flex gap-2 items-center'> <AiOutlineCheck />Automated Software</li>
                        <li className='flex gap-2 items-center'> <AiOutlineCheck />Digital Services</li>
                    </ul>
                </div>
                <div className='order-first lg:order-last'>
                    <img className='h-[350px] text-center w-full' src={aboutCompany} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutCompany
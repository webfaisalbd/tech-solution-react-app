import React from 'react'
import { AiFillApple } from 'react-icons/ai';
import { TbVirusSearch, TbWorldWww } from 'react-icons/tb';

const Plans = () => {
  return (
    <div className='py-12 px-2'>
      <div className='max-w-[1100px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
      <div className='shadow-lg bg-slate-300 hover:scale-105 duration-500 min-w-[260px] lg:h-[350px] md:h-[400px] p-2 m-9 rounded'>
          <div className='text-center'>
            <TbWorldWww size={50} className='mx-auto mt-[-35px]' />
            <h2 className='text-xl font-bold my-3'>Web Development</h2>
            <h2 className='text-xl font-bold my-3'>$149</h2>
            <p className='my-5'>Lorem ipsum dolor.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet sit amet.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet sit amet.</p>
            <button className='my-3 bg-green-400 px-10 py-2 rounded'>GO</button>
          </div>
        </div>
        <div className='shadow-lg hover:scale-105 duration-500 min-w-[260px] lg:h-[350px] md:h-[400px] p-2 m-9 rounded bg-gray-200'>
          <div className='text-center'>
            <TbVirusSearch size={50} className='mx-auto mt-[-35px]' />
            <h2 className='text-xl font-bold my-3'>SEO</h2>
            <h2 className='text-xl font-bold my-3'>$149</h2>
            <p className='my-5'>Lorem ipsum dolor.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet sit amet.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet sit amet.</p>
            <button className='my-3 bg-green-400 px-10 py-2 rounded'>GO</button>
          </div>
        </div>
        <div className='shadow-lg bg-slate-300 hover:scale-105 duration-500 min-w-[260px] lg:h-[350px] md:h-[400px] p-2 m-9 rounded'>
          <div className='text-center'>
            <AiFillApple size={50} className='mx-auto mt-[-40px]' />
            <h2 className='text-xl font-bold my-3'>App Development</h2>
            <h2 className='text-xl font-bold my-3'>$149</h2>
            <p className='my-5'>Lorem ipsum dolor.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet sit amet.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet sit amet.</p>
            <button className='my-3 bg-green-400 px-10 py-2 rounded'>GO</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
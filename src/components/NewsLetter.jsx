import React from 'react'

const NewsLetter = () => {
    return (
        <div className='bg-primary'>
            <div className='max-w-[1100px] mx-auto md:flex justify-between gap-2 py-12 px-6'>
            <div>
                <h2 className='text-white lg:text-3xl text-2xl font-bold font-mono'>Subscribe to our Newsletter</h2>
                <p className='text-white text-sm'>Stay up to date with the latest news, job posts, and articles.</p>
            </div>
            <div className='my-6 md:my-0'>
                <input className='p-2 rounded' type="text" placeholder='Email' />
                <button className='bg-black text-white p-2 ml-3 rounded'>Notify Me</button>
                <br />
                <p className='text-white mt-2'>We care about the protection of your data. <br /> <a className='text-black font-bold' href="">Privacy Policy</a> </p>
            </div>
            </div>
        </div>
    )
}

export default NewsLetter
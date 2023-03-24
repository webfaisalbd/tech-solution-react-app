import React from 'react';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div className='bg-primary w-full py-[100px]'>
            <div className='max-w-[1100px] mx-auto text-center font-bold text-white'>

                <div className='text-black my-3 md:text-[25px] text-[20px]'>
                    Get All Kind of Development and IT Support
                </div>

                <h2 className='text-white md:text-[35px] text-[25px] my-3'>Grow your company with us</h2>

                <div className='my-3 text-[20px] md:text-[25px]'>
                    We Provides
                    <Typed
                        className='pl-3'
                        strings={['Development', 'Bussiness Management', 'Digital Marketing', 'E-commerce Solution', 'Affiliate Marketing Solution', 'Ad Network Solution']}
                        typeSpeed={70}
                        backSpeed={70}
                        loop={true}
                    />

                </div>
            </div>
        </div>
    )
}

export default Banner
import React, { Fragment, useState } from 'react'
import logo from '../../../assets/logo.png'
import sup1 from '../../../assets/caro.jpg'
import sup2 from '../../../assets/carousell.jpg'

const Carousel = () => {

    const banner = [
        {
            id: 1,
            image: sup1,
        },
        {
            id: 2,
            image: sup2
        },
    ]
    return (
        <Fragment>
            <div className='pt-16 lg:pt-16'></div>
            {/* <div className='flex justify-center items-center'>
                <div className='w-full lg:hidden p-1'>
                    <h1 className='absolute text-sm pt-14 lg:hidden p-2 md:hidden text-white font-extrabold'>
                        <span className='text-red-600'>Shop Now!</span>
                        <p>Get Free Shipping Everyday</p>
                    </h1>
                    <img src={logo} alt="carousel" className='flex justify-center items-center' />
                </div>
            </div> */}
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1'>
                    <img src={logo} alt="produk" className='p-2' />
                    <div className='grid-cols-2 lg:grid-cols-2 grid'>
                        {banner.map((ban) => (
                            <div key={ban.id} className='flex justify-center items-center lg:w-full h-fit'>
                                <img src={ban.image} alt="Banner" className='rounded-md w-screen p-2 lg:p-3' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Carousel

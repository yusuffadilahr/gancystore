import React from 'react'
import gifImage from '../../assets/dadah.gif'
import { Link } from 'react-router-dom'

const ThanksCard = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full h-screen'>
                <div className='grid grid-cols-1'>
                    <div className='flex justify-center items-center'>
                        <img src={gifImage} alt="" className='w-52 lg:w-full' />
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='text-gray-500 text-xs lg:text-lg'>
                            Thanks for coming to my website!
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThanksCard

import React from 'react'
import StarsIcons from '../icons/starsIcons'

const CardBody = (props) => {
    const { category, title, rate, count, price } = props
    return (
        <div className='lg:h-32 h-36 pt-3'>
            <div className='flex pl-2 pt-5 border-t'>
                <p className='text-[10px] lg:text-[10px] text-gray-400'>{category}</p>
            </div>
            <div className='flex pl-2'>
                <h1 className='lg:text-sm text-justify mr-3 text-[10px] font-bold'>{title}</h1>
            </div>
            <div className='grid grid-cols-2 ml-2 mt-1'>
                <div className='flex justify-start items-center'>
                    <StarsIcons />
                    <p className='text-[10px]'>
                        {rate}/5.0 ({count})
                    </p>
                </div>
                <div className='flex justify-end items-end mr-5'>
                    <p className='font-bold text-[12px]'>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardBody

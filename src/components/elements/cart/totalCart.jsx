import React from 'react'

const TotalCart = (props) => {
    const { caption, total, coret, dolar } = props
    return (
        <div className='grid grid-cols-2 w-full'>
            <div className='flex items-start justify-start'>
                <h1 className='pl-8 pt-5 font-bold'>
                    {caption}
                </h1>
            </div>
            <div className='flex items-end justify-end'>
                <h1 className={`pr-8 pt-5 font-bold justify-end ${coret}`}>
                    {dolar}{total}
                </h1>
            </div>
        </div>
    )
}

export default TotalCart

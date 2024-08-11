import React from 'react'
import { Link } from 'react-router-dom'

const CardHeader = (props) => {
    const {id, image} = props
    return (
        <div className='flex justify-center items-center'>
            <Link to={`/product/${id}`}>
                <img src={image} alt="IMG" className='p-3 w-58 lg:w-58 lg:h-72 h-44 mb-5 rounded-xl flex justify-center items-center' />
            </Link>
        </div>
    )
}

export default CardHeader

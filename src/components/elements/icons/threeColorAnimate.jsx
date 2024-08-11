import React, { Fragment } from 'react'

const ThreeColorAnimate = () => {
    return (
        <Fragment>
            <p className='rounded-full mr-10 bg-red-600 py-1 px-1 absolute mt-5 animate-ping'></p>
            <p className='rounded-full bg-green-600 py-1 px-1 absolute mt-5 animate-ping'></p>
            <p className='rounded-full ml-10 bg-yellow-600 py-1 px-1 absolute mt-5 animate-ping'></p>
        </Fragment>
    )
}

export default ThreeColorAnimate

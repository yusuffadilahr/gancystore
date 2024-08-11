import React from 'react'
import LoadingIcons from '../icons/loadingIcons'

const LoadingSkeleton = () => {
    return (
        <div className='items-center pb-44 text-center h-screen flex justify-center'>
            <LoadingIcons />
            <h1 className='text-2xl font-semibold'>
                Loading... Please Wait
            </h1>
        </div>
    )
}

export default LoadingSkeleton

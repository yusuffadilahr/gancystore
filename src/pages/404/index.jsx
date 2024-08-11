import React from 'react'
import { useRouteError } from 'react-router-dom'
import Button from '../../components/elements/button/button'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <div className='h-72 w-56 bg-white flex justify-center items-center rounded-t-full shadow-2xl shadow-white'>
                <p className='text-center absolute text-2xl animate-bounce font-bold'>{error.status ? error.status : 'Back to Home'}</p>
                <p className='text-center absolute mt-20 border border-black px-2 font-semibold'>{error.statusText ? error.statusText : 'Page Not Found'}</p>
                {/* <p className='py-36 px-20 bg-gradient-to-tr from-orange-950 animate-fade-left to-black border border-orange-950 rounded-t-full absolute mr-96'></p> */}
                <Button color='bg-white border hover:bg-gray-900 mt-44' text='text-black hover:text-white' size='font-xs'>
                    Back to Home
                </Button>
            </div>
        </div>
    )
}

export default ErrorPage

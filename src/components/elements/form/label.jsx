import React from 'react'

const Label = (props) => {
    const { htmlFor, name, children } = props
    return (
        <label htmlFor={htmlFor} name={name} className='font-semibold text-sm ml-5'>{children}</label>
    )
}

export default Label

import React from 'react'

const Button = (props) => {
    const { children = 'Submit',
        color = 'bg-blue-600 hover:bg-blue-800',
        text = 'text-white',
        size='py-1 px-2',
        type,
        bentuk = 'rounded-full',
        fontSize = 'font-semibold',
        onClick = () => { }
    } = props
    return (
        <button type={type} className={`text-center ${size} ${color} ${bentuk} ${text} ${fontSize}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button

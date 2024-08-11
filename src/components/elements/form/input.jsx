import React from 'react'

const InputTab = (props) => {
    const { type, placeholder, name, autoComplete, mrg = 'mb-2' } = props
    return (
        <input type={type} placeholder={placeholder} name={name}
            className={`border rounded w-full mt-2 ${mrg} text-sm px-2 py-1 `} required
            autoComplete={autoComplete} />
    )
}

export default InputTab

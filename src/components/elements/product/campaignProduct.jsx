import React from 'react'

const CampaignProduct = (props) => {
    const { children, text, size='w-full', color = 'bg-gradient-to-r from-red-300 rounded-tl-lg to-green-700' } = props
    return (
        <p className={`h-6 flex justify-center items-center ${color} ${size} text-white ${text} font-bold`}>
            {children}</p>
    )
}

export default CampaignProduct

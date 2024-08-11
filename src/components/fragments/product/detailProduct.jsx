import React, { Fragment, useEffect, useState } from 'react'
import { getProductById } from '../../../service/product.service'
import { Link, useParams } from 'react-router-dom'
import Button from '../../elements/button/button'
import StarsIcons from '../../elements/icons/starsIcons'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../../../redux/slice/slice'
import Navbar from '../../elements/navigation/navbar'
import FooterComp from '../../elements/footer/footer'

const DetailProduct = () => {
    const [detailProducts, setDetailProducts] = useState([])
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        getProductById(id, (data) => {
            setDetailProducts(data)
        })
    }, [id])

    const sizeCart = ({
        sizeS: 'S',
        sizeM: 'M',
        sizeL: 'L',
        sizeXL: 'XL',
    })

    const bannerSpecial = (
        {
            id: 1,
            title: 'Free Shipping Extra!',
            campaign: 'Up to 50%'
        }
    )
    return (
        <Fragment>
            <Navbar />
            <div className='flex justify-center items-center p-5 pt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 border rounded-xl lg:m-10 lg:w-3/6 shadow-lg m-5'>
                    <div className='flex justify-center items-center lg:border-r lg:w-[300px]'>
                        <img src={detailProducts.image} alt="" className='h-72 mb-10 mt-5 rounded-xl' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='grid grid-rows-1 m-2 lg:mr-5 lg:ml-5'>
                            <h1 className='text-xs text-gray-400'>Category - {detailProducts.category}</h1>
                            <h1 className='text-md font-semibold text-justify'>{detailProducts.title}</h1>
                            <div className='text-justify mt-2'>
                                <h1 className='text-xs text-gray-400'>Description: </h1>
                                <p className='text-[10px] text-gray-700'>{detailProducts.description}</p>
                            </div>
                            <div className='flex mt-2'>
                                <StarsIcons />
                                <StarsIcons />
                                <StarsIcons />
                                <StarsIcons />
                                <StarsIcons />
                                {detailProducts.rating && (
                                    <p className='text-xs'>{detailProducts.rating.rate}/5 ({detailProducts.rating.count})</p>
                                )}
                            </div>
                            <h1 className='text-xs text-gray-400 mb-1 mt-2'>Size:</h1>
                            <div className='flex pl-2'>
                                <Button color='bg-black hover:bg-white hover:text-black hover:border hover:border-black'
                                    fontSize='text-xs'
                                    size='w-6 h-6 mr-1'>{sizeCart.sizeS}
                                </Button>
                                <Button color='bg-black hover:bg-white hover:text-black hover:border hover:border-black'
                                    fontSize='text-xs'
                                    size='w-6 h-6 mr-1'>{sizeCart.sizeM}
                                </Button>
                                <Button color='bg-black hover:bg-white hover:text-black hover:border hover:border-black'
                                    fontSize='text-xs'
                                    size='w-6 h-6 mr-1'>{sizeCart.sizeL}
                                </Button>
                                <Button color='bg-black hover:bg-white hover:text-black hover:border hover:border-black'
                                    fontSize='text-xs'
                                    size='w-6 h-6'>{sizeCart.sizeXL}
                                </Button>
                            </div>
                            <h1 className='text-xs text-gray-400 mb-1 mt-2'>Price:</h1>
                            <div className='flex mb-5'>
                                <h1 className='font-semibold'>${detailProducts.price}</h1>
                            </div>
                            <Link to='/cart'>
                                <Button color='mb-2 w-full bg-black hover:bg-white hover:border-black hover:border hover:text-black'
                                    onClick={() => dispatch(AddtoCart(detailProducts))}>
                                    Add to Cart
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </Fragment>
    )
}

export default DetailProduct

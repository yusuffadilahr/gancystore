import React, { Fragment, useEffect, useState } from 'react'
import { getProducts } from '../../../service/product.service'
import Button from '../../elements/button/button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../../../redux/slice/slice'
import FlagIcons from '../../elements/icons/flagIcons'
import ShippingIcons from '../../elements/icons/shippingIcons'
import CampaignProduct from '../../elements/product/campaignProduct'
import CardHeader from '../../elements/product/cardHeader'
import CardBody from '../../elements/product/cardBody'
import LoadingSkeleton from '../../elements/loading/loading'

const CardProduct = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        setIsLoading(true)
        getProducts((data) => {
            setProduct(data)
            setData(data)
            setIsLoading(false)
        })
    }, [])

    const bannerSpecial = (
        {
            id: 1,
            title: 'Free Shipping Extra!',
            campaign: 'Up to 50%'
        }
    )

    const UpdateCategory = (cat) => {
        if (cat === "all") {
            setProduct(data)
        } else {
            const SingleCategory = data.filter((kat) => kat.category === cat)
            setProduct(SingleCategory)
        }
    }
    return (
        <Fragment>
            <div className='w-full justify-center items-center pt-20'>
                <div >
                    <h1 className='flex justify-center items-center text-[12px] lg:text-2xl font-bold md:text-lg lg:mr-6'>-- Category --</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <Button color='bg-transparent m-2' text='text-black hover:text-slate-500 lg:text-lg md:text-[12px] text-[8px]' onClick={() => setProduct(data)}>All</Button>
                    <Button color='bg-transparent m-2' text='text-black hover:text-slate-500 lg:text-lg md:text-[12px] text-[8px]' onClick={() => UpdateCategory("men's clothing")}>Mens Clothing</Button>
                    <Button color='bg-transparent m-2' text='text-black hover:text-slate-500 lg:text-lg md:text-[12px] text-[8px]' onClick={() => UpdateCategory("women's clothing")}>Womens Clothing</Button>
                    <Button color='bg-transparent m-2' text='text-black hover:text-slate-500 lg:text-lg md:text-[12px] text-[8px]' onClick={() => UpdateCategory("jewelery")}>Jewelery</Button>
                    <Button color='bg-transparent m-2' text='text-black hover:text-slate-500 lg:text-lg md:text-[12px] text-[8px]' onClick={() => UpdateCategory("electronics")}>Electronics</Button>
                </div>
            </div>
            <div className='flex'>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5'>
                {product.length > 0 && product.map((prod) => (
                    <div key={prod.id}>
                        <div className='flex justify-center p-2 lg:mt-5 items-center'>
                            <div className='lg:h-full h-full w-80 border rounded-xl bg-white'>
                                <div className='flex'>
                                    <CampaignProduct text='text-white text-[8px] md:text-[12px] lg:text-[12px]'>
                                        <ShippingIcons />
                                        {bannerSpecial.title}
                                    </CampaignProduct>
                                    <CampaignProduct
                                        color='bg-gradient-to-r from-red-300 to-yellow-300 rounded-tr-lg'
                                        text='text-white text-[7px] md:text-[12px] lg:text-[10px]'
                                        size='w-1/2'>
                                        <FlagIcons />
                                        {bannerSpecial.campaign}
                                    </CampaignProduct>
                                </div>
                                <CardHeader image={prod.image} id={prod.id} />
                                <CardBody category={prod.category} title={prod.title} rate={prod.rating.rate} count={prod.rating.count} price={prod.price} />
                                <div className='lg:pt-5 pt-0 pb-3 p-2 flex justify-center items-center'>
                                    <Link to={`/product/${prod.id}`} className='w-full mr-2'>
                                        <Button color='bg-black m-1 w-full text-sm hover:bg-white hover:text-black hover:border hover:border-black'>
                                            Buy Now
                                        </Button>
                                    </Link>
                                    <Link to='/cart'>
                                        <Button color='bg-black m-1 text-sm hover:bg-white hover:text-black hover:border hover:border-black'
                                            onClick={() => dispatch(AddtoCart(prod))}>
                                            +
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute flex justify-center items-center w-full'>
                {isLoading ?
                    <LoadingSkeleton /> : ''}
            </div>
        </Fragment>
    )
}

export default CardProduct

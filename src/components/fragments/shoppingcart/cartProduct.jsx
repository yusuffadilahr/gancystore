import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddtoCart, RemoveCart } from '../../../redux/slice/slice'
import Button from '../../elements/button/button'
import StarsIcons from '../../elements/icons/starsIcons'
import TotalCart from '../../elements/cart/totalCart'

const CartProduct = () => {
    const cart = useSelector((state) => state.cart.data)
    const [isProduct, setIsProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setIsProduct(cart)
    }, [cart])

    const getTotalCart = () => {
        return cart.reduce((acc, prod) => acc + (prod.quantity * prod.price), 0)
    }

    const getTotalShipping = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * 1), 0)
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    return (
        <Fragment>

            {/* Mobile Total Cart */}
            <div className='grid grid-cols-1 lg:hidden pt-20 w-full h-fit'>
                <div className='flex justify-center w-full pl-5 pr-5 items-center'>
                    <div className='border w-full h-fit rounded-sm'>
                        <TotalCart caption='Total Quants' total={getTotalQuantity()} />
                        <TotalCart caption='Total Shipping' total={getTotalShipping()} dolar='$' />
                        <TotalCart caption='TAX' total='10.00' coret='line-through' dolar='$' />
                        <TotalCart caption='Total' total={getTotalCart()} dolar='$' />
                        <div className='pt-8 pb-5 p-2'>
                            <Link to='/thanks'>
                                <Button size='w-full' color='bg-white hover:bg-black' text='text-black hover:text-white border' >Checkout</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='lg:pt-16 lg:w-1/2 w-full h-full flex justify-center items-center'>
                    <div className='grid grid-cols-1 w-full lg:grid-cols-1 p-5'>
                        {isProduct.length > 0 && isProduct.map((prod) => (
                            <div key={prod.id} className='mt-5 grid lg:grid-cols-2 grid-cols-2 border shadow-md'>
                                <div className='w-full flex justify-center items-center'>
                                    <img src={prod.image} alt="Produk" className='w-28 h-28 lg:w-44 lg:h-44 p-2 rounded-lg' />
                                </div>
                                <div className='p-2'>
                                    <p className='text-xs text-gray-500 ml-2'>{prod.category}</p>
                                    <h1 className='font-bold text-justify text-xs lg:text-sm p-2'>{prod.title}</h1>
                                    <p className='text-[10px] ml-2 text-justify text-slate-500'>{prod.description}</p>
                                    <div className='text-xs ml-2 mt-2 flex'>
                                        {prod.rating && (
                                            <>
                                                <StarsIcons />
                                                <p>{prod.rating.rate}/5 ({prod.rating.count})</p>
                                            </>
                                        )}
                                    </div>
                                    <div className='pt-2 grid grid-cols-2'>
                                        <div className='flex justify-start text-center'>
                                            <Button onClick={() => dispatch(RemoveCart(prod))} bentuk='ml-2 rounded-l-xl' size='py-1 px-2' color='bg-gray-600 hover:bg-gray-800'>-</Button>
                                            <input type="number" readOnly className='w-10 ml-4 flex justify-center items-center' value={prod.quantity} />
                                            <Button onClick={() => dispatch(AddtoCart(prod))} bentuk='rounded-r-xl' size='py-1 px-1' color='bg-gray-600 hover:bg-gray-800'>+</Button>
                                        </div>
                                        <div className='justify-end flex items-center'>
                                            <h1 className='font-bold text-sm'>
                                                ${prod.price}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Bila produk tidak ada atau sama dengan 0 memberi deskripsi tidak ada produk */}
                        {isProduct.length === 0 ?
                            <div className='h-full pt-20 flex justify-center items-center'>
                                <p className='text-gray-500'>Belum ada Produk</p>
                            </div>
                            :
                            ''
                        }
                    </div>
                </div>

                {/* Total Cart Produk Web Desktop */}
                <div className='hidden lg:block lg:w-1/2 lg:h-full pt-[105px] pb-20'>
                    <div className='lg:w-[650px] shadow lg:border lg:h-full'>
                        <TotalCart caption='Total Quantity' total={getTotalQuantity()} />
                        <TotalCart caption='Total Shipping' total={getTotalShipping()} dolar='$' />
                        <TotalCart caption='TAX' total='10.00' coret='line-through' dolar='$' />
                        <TotalCart caption='Total' total={getTotalCart()} dolar='$' />
                        <div className='pt-8 pb-5 p-2'>
                            <Link to='/thanks'>
                                <Button size='w-full' color='bg-white hover:bg-black' text='text-black hover:text-white border' >Checkout</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default CartProduct
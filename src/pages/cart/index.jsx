import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/elements/navigation/navbar'
import FooterComp from '../../components/elements/footer/footer'
import CartProduct from '../../components/fragments/shoppingcart/cartProduct'

const CartPage = () => {
    return (
        <Fragment>
            <Navbar />
            <CartProduct />
            <FooterComp />
        </Fragment >
    )
}

export default CartPage

import React, { Fragment } from 'react'
import CardProduct from '../../components/fragments/product/cardProduct'
import Navbar from '../../components/elements/navigation/navbar'
import FooterComp from '../../components/elements/footer/footer'

const ProductPage = () => {
    return (
        <Fragment>
            <Navbar/>
            <CardProduct />
            <FooterComp />
        </Fragment>
    )
}

export default ProductPage

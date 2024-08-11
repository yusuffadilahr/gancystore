import React, { Fragment } from 'react'
import CardProduct from '../../components/fragments/product/cardProduct'
import Navbar from '../../components/elements/navigation/navbar'
import Carousel from '../../components/elements/carousel/carousel'
import FooterComp from '../../components/elements/footer/footer'

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <CardProduct />
      <FooterComp />
    </Fragment>
  )
}

export default HomePage

import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../model/Hero/Hero'
import LatestProducts from '../../model/LatestProducts/LatestProducts'
import Footer from '../../components/Footer'

export default function Landing() {
  return (
    <div>
        <Navbar />
        <Hero />
        <LatestProducts />
        <Footer />
    </div>
  )
}

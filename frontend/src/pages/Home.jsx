import React from 'react'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import IndustriesWeServe from '../components/IndustriesWeServe'
import Products from '../components/Products'
import WhyMaple from '../components/WhyMaple'
import Infrastructure from '../components/Infrastructure'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Clients />
            <IndustriesWeServe />
            <Products />
            <WhyMaple />
            <Infrastructure />
            <Footer />
        </div>
    )
}

export default Home
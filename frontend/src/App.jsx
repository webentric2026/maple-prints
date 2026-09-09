import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutMain from './pages/about_us/AboutMain'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import ServicesPage from './pages/Services/ServicesPage'
import FloatingContactButtons from './utils/FloatingContactButtons'
import Products from './pages/Products'
import ScrollToTop from './utils/ScrollToTop'
import NewHero from './components/NewHero'
import Clients from './components/Clients'
import WhyChooseUs from './components/WhyMaple'

const App = () => {
    return (
        <div>
            <FloatingContactButtons />
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutMain />} />
                <Route path='/clients' element={<Clients />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/products' element={<Products />} />
                <Route path='/testing' element={<NewHero />} />
                <Route path='/why-choose-us' element={<WhyChooseUs />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
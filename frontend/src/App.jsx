import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutMain from './pages/about_us/AboutMain'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import ServicesPage from './pages/Services/ServicesPage'
import FloatingContactButtons from './utils/FloatingContactButtons'

const App = () => {
    return (
        <div>
            <FloatingContactButtons />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutMain />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<ServicesPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
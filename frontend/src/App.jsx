import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutMain from './pages/about_us/AboutMain'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutMain />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
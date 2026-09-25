import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import SEO from './components/SEO'

const SEO_MAP = {
    '/': {
        title: 'Maple Prints | Premium Mono Cartons, Rigid Boxes & Pharma Packaging – Baddi, India',
        description: 'Maple Prints manufactures premium mono cartons, rigid boxes, pharma, cosmetic & FMCG packaging in Baddi with precision printing, foiling, embossing & spot UV.',
        path: '/',
    },
    '/about': {
        title: 'About Maple Prints | Packaging Manufacturer in Baddi, Himachal Pradesh',
        description: 'Learn about Maple Prints – infrastructure, leadership and commitment to quality printed packaging for pharma, cosmetics and FMCG brands.',
        path: '/about',
    },
    '/products': {
        title: 'Packaging Products | Mono Cartons, Rigid, Pharma, Cosmetic & Food Boxes',
        description: 'Explore Maple Prints products: pharma cartons, cosmetic boxes, ayurvedic, nutraceutical, food, corrugated, rigid and window packaging.',
        path: '/products',
    },
    '/services': {
        title: 'Printing & Packaging Services | Offset, Foiling, Embossing, Spot UV',
        description: 'Offset printing, lamination, metallic foiling, embossing, die-cutting, spot UV and corrugated box services under one roof.',
        path: '/services',
    },
    '/clients': {
        title: 'Our Clients & Channel Partnerships | Pharma Brands We Serve',
        description: 'Maple Prints serves Unijules, Lark, Yaxon, Synokem and channel partners like Mankind, Cipla, Sun Pharma, Glenmark, Ranbaxy & Abbott.',
        path: '/clients',
    },
    '/why-choose-us': {
        title: 'Why Choose Maple Prints | Quality, Infrastructure & Reliability',
        description: 'Advanced presses, complete in-house finishing, strict QC and on-time delivery – why leading brands trust Maple Prints.',
        path: '/why-choose-us',
    },
    '/contact': {
        title: 'Contact Maple Prints | Get a Packaging Quote – Rai, Sonipat',
        description: 'Contact Maple Prints at Plot No. 2173, HSIIDC Rai, Sonipat. Call 9810152101 for mono cartons, rigid boxes & custom packaging quotes.',
        path: '/contact',
    },
    '/testing': { title: 'Testing', description: 'Internal test page.', path: '/testing', noindex: true },
};

function RouteSEO() {
    const { pathname } = useLocation();
    const seo = SEO_MAP[pathname] || SEO_MAP['/'];
    return <SEO {...seo} />;
}

const App = () => {
    return (
        <div>
            <FloatingContactButtons />
            <ScrollToTop />
            <RouteSEO />
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
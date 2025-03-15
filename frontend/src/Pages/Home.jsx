import React from 'react'
import Header from '../Components/Header'
import AboutSection from '../Components/AboutSection'
import ServicesSection from '../Components/ServicesSection'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutSection />
            <ServicesSection />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home

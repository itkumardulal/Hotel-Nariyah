import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import { Room } from '../components/Room'
import { Gallery } from '../components/Gallery'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <Room/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
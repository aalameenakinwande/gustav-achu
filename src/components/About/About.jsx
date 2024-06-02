import React from 'react'
import AboutHero from './AboutHero'
import NewsLetter from '../Home/NewsLetter'
import BrandSlide from '../Home/BrandSlide'
import AboutGustav from './AboutGustav'
import AboutBrand from './AboutBrand'

const About = () => {
  return (
    <div>
      <AboutHero />
      <BrandSlide />
      <AboutGustav />
      <AboutBrand />
      <NewsLetter />
    </div>
  )
}

export default About


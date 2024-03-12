import React from 'react'
import './HeroSection.css'
import hero from '../../assets/hero-light.png'

const HeroSection = () => {
  return (
    <img src={hero} alt="" className='hero' />
  )
}

export default HeroSection
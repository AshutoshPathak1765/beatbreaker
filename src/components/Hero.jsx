import React from 'react'
import heroImage from "../assets/heroImage.jpg"

function Hero() {
  return (
    <div>
      <img className='mx-auto' src={heroImage} alt="" />
      <h1 className='text-center text-3xl' style={{color:"#E1C04B"}}>Beat Breakers</h1>
    </div>
  )
}

export default Hero

import React from "react";
import heroImage from "../assets/heroImage.jpg";

function Hero() {
  return (
    <div className="relative hero" style={{fontFamily:"Titan One"}}>
      <img className="mx-auto" src={heroImage} alt="" />
      <div className="relative lg:bottom-24 lg:left-0 vsm:bottom-10 w-full h-full flex items-center justify-center">
        <p className="lg:text-5xl sm:text-3xl vsm:text-3xl font-bold" style={{color:"#E1C04B"}}>Beat_Breakers</p>
      </div>
    </div>
  );
}

export default Hero;

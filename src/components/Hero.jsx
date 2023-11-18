import React from "react";
import heroImage from "../assets/heroImage.jpg";

function Hero() {
  return (
    <div className="relative hero" style={{fontFamily:"Titan One"}}>
      <img className="mx-auto" src={heroImage} alt="" />
      <div className="relative bottom-24 left-0 w-full h-full flex items-center justify-center">
        <p className="text-5xl font-bold" style={{color:"#E1C04B"}}>Beat_Breakers</p>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import aboutImage from "../assets/aboutImage.jpg";

function About() {
  return (
    <div className="mt-4">
      <h1 className="text-center text-5xl" style={{ color: "#E3D399", fontFamily:"Titan One"}}>
        About Us
      </h1>
      <div className="flex gap-5 px-5 pt-5">
        <img src={aboutImage} style={{height:"250px"}} alt="" />
        <p className="pt-5">
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis feugiat a, tellus.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus .
        </p>
      </div>
    </div>
  );
}

export default About;

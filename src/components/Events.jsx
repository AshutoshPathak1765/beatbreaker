import React from "react";
import eventsPic_1 from "../assets/eventsPic_1.jpg"

function Events() {
  return (
    <div>
      <h1 className="text-center text-5xl" style={{ color: "#E3D399",fontFamily:"Titan One" }}>
        Events
      </h1>
      <div className="pt-3 flex justify-between">
        <img src={eventsPic_1} alt="" />
      </div>
    </div>
  );
}

export default Events;

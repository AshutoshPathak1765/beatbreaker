import React from "react";
import eventsPic_1 from "../assets/eventsPic_1.jpg";
import eventsPic_2 from "../assets/eventsPic_2.jpg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { Image, image } from "@nextui-org/react";

const images = [eventsPic_1, eventsPic_2];

function Events() {
  return (
    <div>
      <h1
        className="text-center text-5xl"
        style={{ color: "#E3D399", fontFamily: "Titan One" }}
      >
        Events
      </h1>
      <div className="pt-5 flex justify-between">
        <FaCaretLeft color="#D9D9D9" size={150} />
        <div className="flex justify-center gap-3">
          {
          images.map((item,index)=> <Image isZoomed width={250} src={item} />)
          
          }
        </div>
        <FaCaretRight color="#D9D9D9" size={150} />
      </div>
    </div>
  );
}

export default Events;

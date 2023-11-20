import React from "react";
import eventsPic_1 from "../assets/eventsPic_1.jpg";
import eventsPic_2 from "../assets/eventsPic_2.jpg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { Image } from "@nextui-org/react";

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
        <FaCaretLeft color="#D9D9D9" size={150}  />
        <div className="flex justify-center gap-3">
        <Image isZoomed width={250} src={eventsPic_1} />
        <Image isZoomed width={250} src={eventsPic_2} />
        </div>
        <FaCaretRight color="#D9D9D9" size={150} />
      </div>
    </div>
  );
}

export default Events;

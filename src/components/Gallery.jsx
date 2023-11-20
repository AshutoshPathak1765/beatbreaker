import { Image } from "@nextui-org/react";
import React from "react";
import Gallery_1 from "../assets/Gallery_1.jpg";
import Gallery_2 from "../assets/Gallery_2.jpg";
import Gallery_3 from "../assets/Gallery_3.jpg";
import Gallery_4 from "../assets/Gallery_4.jpg";
import Gallery_5 from "../assets/Gallery_5.jpg";
import Gallery_6 from "../assets/Gallery_6.jpg";

const images = [
  Gallery_1,
  Gallery_2,
  Gallery_3,
  Gallery_4,
  Gallery_5,
  Gallery_6,
];

function Gallery() {
  return (
    <div>
      <h1
        className="mt-5 text-center lg:text-5xl sm:text-3xl"
        style={{ fontFamily: "Titan One", color: "#E3D399" }}
      >
        Gallery
      </h1>
      <div
        className="p-3 gap-3"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Image isZoomed width={400} src={Gallery_1} />
        <Image isZoomed width={400} src={Gallery_2} />
        <Image isZoomed width={400} src={Gallery_3} />
        <Image isZoomed width={400} src={Gallery_4} />
        <Image isZoomed width={400} src={Gallery_5} />
        <Image isZoomed width={400} src={Gallery_6} />
      </div>
      <h1
        className="p-2 text-right text-2xl"
        style={{ fontFamily: "Titan One" }}
      >
        See more...
      </h1>
    </div>
  );
}

export default Gallery;

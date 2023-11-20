import { Card, CardBody, CardFooter, Image, Spacer } from "@nextui-org/react";
import React from "react";

const list = [
  {
    name: "Ashutosh Pathak",
    // img: "/images/fruit-1.jpeg",
    roll: "2021pgcaca101",
  },
  {
    name: "Hitesh Ahuja",
    // img: "/images/fruit-2.jpeg",
    roll: "2021pgcaca087",
  },
  {
    name: "Raju",
    // img: "/images/fruit-3.jpeg",
    roll: "2021pgcaca021",
  },
  {
    name: "Arun Chauhan",
    // img: "/images/fruit-4.jpeg",
    roll: "2021pgcaca068",
  },
];

function Team() {
  return (
    <div id="team">
      <h1
        className="text-5xl text-center"
        style={{ fontFamily: "Titan One", color: "#E3D399" }}
      >
        Our Team
      </h1>
      <div className="flex justify-around p-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-10 object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <br />
            <CardFooter className="text-base flex flex-col justify-between">
              <b>{item.name}</b>
              <br />
              <p className="text-default-800">{item.roll}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Team;

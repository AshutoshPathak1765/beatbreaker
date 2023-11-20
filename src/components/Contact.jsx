import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="flex flex-col justify-start p-3 gap-5">
        <h1 className="text-left m-10 text-5xl"
          style={{ fontFamily: "Titan One", color: "#E3D399" }}
        >
          Contact us
        </h1>
        <div className="flex justify-evenly" style={{width:"100%"}}>
        <h3 className="font-bold" style={{fontFamily:"Timmana"}}>Beat Breakers , NIT Jamshedpur</h3>
        <Input className="max-w-xs" type="text" placeholder="Please enter your name..." />
        </div>
        <div className="flex justify-evenly gap-36" style={{width:"100%"}}>
        <h3 className="font-bold" style={{fontFamily:"Timmana"}}>Email</h3>
        <Input className="max-w-xs" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="flex justify-end mr-unit-64 pr-8">
      <Textarea className="max-w-xs"
        minRows={5}
        placeholder="Your Message"
      />
      </div>
      <div className="flex justify-end mr-unit-64 pr-20 mt-4">
      <Button className="text-3xl" size="lg" radius="md" color="warning" style={{fontFamily:"Timmana"}}>
      Submit
    </Button>
    </div>
    </div>
  );
}

export default Contact;

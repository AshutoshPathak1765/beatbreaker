import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className='dark text-foreground bg-background w-full'>
      <Header />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Contact />
    </div>
  );
}

export default Home;

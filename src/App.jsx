import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";

import Hero from "./components/Hero/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Work from "./components/Work/index.jsx";
import Boxes from "./components/Boxes/index.jsx";
import Process from "./components/Process/index.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function App() {
  useEffect(() => {
    const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})

gsap.ticker.lagSmoothing(0)
  }, []);

  return (
    <main className="App font-NohemiL bg-main">
      <Hero />
      <AboutUs />
      <Work />
      <Boxes />
      <Process />
      <div className="min-h-screen bg-light w-full text-center pt-64">
        footer
      </div>
    </main>
  );
}

export default App;

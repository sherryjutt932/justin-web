import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";

import Hero from "./components/Hero/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";

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
      <div className="min-h-screen bg-black w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, minima earum eum itaque harum iusto delectus exercitationem eligendi aliquid quae accusantium dolore dolores, molestiae quia, voluptatem quo repellendus sed quis.
      </div>
    </main>
  );
}

export default App;

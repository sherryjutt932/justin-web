import Hero from "./components/Hero/index.jsx";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import { useEffect } from "react";
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
    <div className="App font-NohemiL bg-main">
      <Hero />
      <div className="min-h-screen p-24">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
        reiciendis molestias placeat, quae, consectetur cum quo recusandae magni
        quam libero laborum perspiciatis incidunt deleniti facere architecto
        culpa at facilis aperiam?
      </div>
    </div>
  );
}

export default App;

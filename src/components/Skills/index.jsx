import React, { useEffect, useRef, useState } from "react";
import Label from "./Label";
import Box from "./Box";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
const labelsRef = useRef()
const boxesRef = useRef()
const skillsRef = useRef()
const labelsCon = useRef()

useEffect(() => {
  var boxesTl = gsap.timeline();
  var labelsTl = gsap.timeline();
  
  if(labelsRef.current ){
    labelsTl.fromTo(
      [labelsRef.current.children[0]],
      //
      {
        y:-20,
      },
      {
        y:20,
      },"a"
    )
    .fromTo(
      [labelsRef.current.children[3]],
      //
      {
        y:-30,
      },
      {
        y:0,
      },"a"
    ).fromTo(
      [labelsRef.current.children[1],labelsRef.current.children[2]],
      //
      {
        y:-15,
      },
      {
        y:15,
      },"a"
    )
    
  }
  if(boxesRef.current){
    boxesTl.fromTo(
      boxesRef.current.children[0],
      {
        y:-50,
      },
      {
        y:120,
      },"a"
    ).fromTo(
      boxesRef.current.children[1],
      {
        y:-40,
      },
      {
        y:0,
      },"a"
    ).fromTo(
      boxesRef.current.children[2],
      {
        y:-30,
      },
      {
        y:-120,
      },"a"
    )
  }

  ScrollTrigger.create({
    trigger: labelsCon.current,
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    animation: labelsTl,
    // pin:true,
  });
  
  ScrollTrigger.create({
    trigger: boxesRef.current,
    start: "top center",
    end: "bottom center",
    scrub: 3,
    animation: boxesTl,
  });

  return () => {
    labelsTl.kill();
    boxesTl.kill();
  };
}, []);

  return (
    <div ref={skillsRef} className="min-h-screen w-full flex flex-col text-[80px] leading-[95px] text-white text-center  mt-16 2xl:mt-0 py-16 2xl:py-32 gap-16">
      {/* heading */}
      <div ref={labelsCon} className=" w-full">
        <div className="relative w-fit mx-auto">
          We Bring Skills,
          <br />
          You Achieve Results
          <div ref={labelsRef} className="absolute left-0 top-0 h-full w-full text-2xl">
            <Label theme="light" className="-left-4 -top-4">
              work
            </Label>
            <Label theme="dark" className="-right-4  top-4">
              about
            </Label>
            <Label theme="dark" className="-left-28 -bottom-4">
              contact
            </Label>
            <Label theme="light" className="-right-24 -bottom-6">
              discover
            </Label>
          </div>
        </div>
      </div>

      {/* boxes */}
      <div ref={boxesRef} className="flex gap-5 h-full items-center">
        <div className="flex-1 py-12">
          <Box index="1" label="ui ux" detail="creativity">
            design
          </Box>
        </div>
        <div className="flex-1 py-12">
          <Box index="2" label="web" detail="innovation">
            development
          </Box>
        </div>
        <div className="flex-1 py-12">
          <Box index="3" label="brand" detail="distinctive">
            identity
          </Box>
        </div>
      </div>
    </div>
  );
}

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import "./App.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const mainPageRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);
  const thirdSectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".test-section .box-1",{
      x:0,
      backgroundColor: "red",
    }, {
      x:300,
      backgroundColor: "black",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.fromTo(".box-1-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 1,
    }, 3)
    tl.fromTo(".test-section .box-2", {
      x:0,
      backgroundColor: "blue",
    }, {
      x:400,
      backgroundColor: "green",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.fromTo(".box-2-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 3,
    }, 3)
    tl.fromTo(".test-section .box-3", {
      x:0,
      backgroundColor: "green",
    }, {
      x:500,
      backgroundColor: "blue",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.fromTo(".box-3-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 3,
    }, 3)

    tl.fromTo(".test-section .box-4", {
      x:0,
      backgroundColor:"black",
      ease: "power2.inOut",
      duration: 3,
    }, {
      x:600,
      backgroundColor:"red",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.fromTo(".box-4-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 3,
    }, 3)
  });

  return (
    <div ref={mainPageRef} className="main-page">
      <section className="test-section section">
        <div className="box-1 w-[100px] h-[100px] bg-red-500">
          <h1 className="box-1-text text-[10px] text-white p-4">Welcome to the right place</h1>
        </div>
        <div className="box-2 w-[100px] h-[100px] bg-blue-500">
          <h1 className="box-2-text text-[10px] text-white p-4">Welcome to the right place</h1>
        </div>
        <div className="box-3 w-[100px] h-[100px] bg-green-500">
          <h1 className="box-3-text text-[10px] text-white p-4">Welcome to the right place</h1>
        </div>
        <div className="box-4 w-[100px] h-[100px] bg-black left-0 top-0">
          <h1 className="box-4-text text-[10px] text-white p-4">Welcome to the right place</h1>
        </div>
      </section>
      <section ref={firstSectionRef} className="first-section section">
        {/* <picture>
          <img className="hibou-title relative" src="hibouTitle.svg" />
        </picture> */}
      </section>
      <section
        ref={secondSectionRef}
        className="second-section section"
      ></section>
      <section
        ref={thirdSectionRef}
        className="third-section section"
      ></section>
    </div>
  );
}

export default App;

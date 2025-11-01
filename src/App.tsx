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

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({paused: true});
    tl.current.fromTo(".test-section .box-1",{
      x:0,
      backgroundColor: "red",
    }, {
      x:300,
      backgroundColor: "black",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.current.fromTo(".box-1-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 1,
    }, 3)
    tl.current.fromTo(".test-section .box-2", {
      x:0,
      backgroundColor: "blue",
    }, {
      x:400,
      backgroundColor: "green",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.current.fromTo(".box-2-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 3,
    }, 3)
    tl.current.fromTo(".test-section .box-3", {
      x:0,
      backgroundColor: "green",
    }, {
      x:500,
      backgroundColor: "blue",
      ease: "power2.inOut",
      duration: 3,
    }, 0)
    tl.current.fromTo(".box-3-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 3,
    }, 3)

    tl.current.fromTo(".test-section .box-4", {
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
    tl.current.fromTo(".box-4-text", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      duration: 3,
    }, 3)
  });

  const activateAnimation = () => {
    tl.current?.play();
  }

  const restartAnimation = () => {
    tl.current?.restart();
  }

  return (
    <div ref={mainPageRef} className="main-page">
      <section className="button-container-section p-4 flex gap-4">
        <button onClick={activateAnimation} className="py-2 px-4 text-white bg-amber-600 border border-blue-400">Activate</button>
        <button onClick={restartAnimation} className="py-2 px-4 text-white bg-amber-600 border border-blue-400">Restart</button>
      </section>
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

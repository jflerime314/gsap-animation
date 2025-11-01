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
    gsap.to(".test-section .box-1", {
      x:300,
      ease: "power2.inOut",
      duration: 3,
    })
    gsap.to(".test-section .box-2", {
      x:400,
      ease: "power2.inOut",
      duration: 3,
    })
    gsap.to(".test-section .box-3", {
      x:500,
      ease: "power2.inOut",
      duration: 3,
    })

    gsap.to(".test-section .box-4", {
      x:600,
      ease: "power2.inOut",
      duration: 3,
    })
  });

  return (
    <div ref={mainPageRef} className="main-page">
      <section className="test-section section">
        <div className="box-1 w-[100px] h-[100px] bg-red-500"></div>
        <div className="box-2 w-[100px] h-[100px] bg-blue-500">
          <h1 className="text-[10px] text-white p-4">Welcome to the right place</h1>
        </div>
        <div className="box-3 w-[100px] h-[100px] bg-green-500"></div>
        <div className="box-4 w-[100px] h-[100px] bg-black left-0 top-0"></div>
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

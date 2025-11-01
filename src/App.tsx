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
    // gsap.fromTo(
    //   ".hibou-title",
    //   { y: 0 },
    //   { y: "120dvh", duration: 3.5, ease: "elastic" },
    // );
    //
    gsap.to(".hibou-title", {
      y: "150dvh",
      ease: "power2.out",
      duration: 3,
      scrollSmoother: {
        wrapper: "first-section",
        content: "hibou-title",
        smooth: true,
        effects: true,
        normalizeScroll: true,
      },
      scrollTrigger: {
        trigger: ".hibou-title",
        start: "top top",
        end: "bottom+=150dvh top", // how long to scroll
        scrub: true,
        pin: true,
      },
    });

    gsap.to(".box-1", {
      x: 300,
      y: 300,
      ease: "power2.out",
      duration: 6, 
    });

    gsap.fromTo(".box-2", {
      x: 300,
      y: 300,
    }, {
      x: 0,
      y: 0,
      ease: "power2.out",
      duration: 6, 
    });

    gsap.from(".box-3", {
      x:300,
      y:300,
      ease: "power2.inOut",
      duration: 3,
      
    })
  });

  return (
    <div ref={mainPageRef} className="main-page">
      <section className="test-section section">
        <div className="box-1"></div>
        <div className="box-2 w-[100px] h-[100px] bg-blue-500">
          <h1 className="text-[10px] text-white p-4">Welcome to the right place</h1>
        </div>
        <div className="box-3 absolute w-[100px] h-[100px] bg-green-500"></div>
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

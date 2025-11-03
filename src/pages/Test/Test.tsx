import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Test.css";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  Flip,
  ScrollToPlugin
);

function Test() {
  const mainPageRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);
  const thirdSectionRef = useRef<HTMLElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  // const tl = useRef<gsap.core.Timeline | null>(null);
  const animationContainer: { [key: string]: any } = {};
  animationContainer["testSection"] = useRef<gsap.core.Timeline | null>(null);
  animationContainer["firstSection"] = useRef<gsap.core.Timeline | null>(null);
  // animationContainer["secondSection"] = useRef<gsap.core.Timeline | null>(null);
  // animationContainer["thirdSection"] = useRef<gsap.core.Timeline | null>(null);

  // {
  //     scrollTrigger: {
  //       trigger: ".test-section",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //     }
  //   }

  const testAnimation = () => {
    animationContainer["testSection"].current = gsap.timeline({ paused: true });
    animationContainer["testSection"].current.fromTo(
      ".test-section .box-1",
      {
        x: 0,
        backgroundColor: "red",
      },
      {
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "50%",
        backgroundColor: "black",
        ease: "power2.inOut",
        duration: 6,
      },
      0
    );
    // animationContainer["testSection"].current.fromTo(
    //   ".box-1-text",
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     ease: "power2.out",
    //     duration: 1,
    //   },
    //   3
    // );
    animationContainer["testSection"].current.fromTo(
      ".test-section .box-2",
      {
        x: 0,
        backgroundColor: "blue",
      },
      {
        x: 400,
        backgroundColor: "green",
        ease: "power2.inOut",
        duration: 3,
      },
      0
    );
    animationContainer["testSection"].current.fromTo(
      ".box-2-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 3,
      },
      3
    );
    animationContainer["testSection"].current.fromTo(
      ".test-section .box-3",
      {
        x: 0,
        backgroundColor: "green",
      },
      {
        x: 500,
        backgroundColor: "blue",
        ease: "power2.inOut",
        duration: 3,
      },
      0
    );
    animationContainer["testSection"].current.fromTo(
      ".box-3-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 3,
      },
      3
    );

    animationContainer["testSection"].current.fromTo(
      ".test-section .box-4",
      {
        x: 0,
        backgroundColor: "black",
        ease: "power2.inOut",
        duration: 3,
      },
      {
        x: 600,
        backgroundColor: "red",
        ease: "power2.inOut",
        duration: 3,
      },
      0
    );
    animationContainer["testSection"].current.fromTo(
      ".picture",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 3,
      },
      3
    );
  };

  const firstSectionAnimation = () => {
    const smoothScroll = ScrollSmoother.create({
      content: mainPageRef.current,
      smooth: 4,
    });
    console.log(smoothScroll);
    animationContainer["firstSection"].current = gsap.timeline({
      paused: true,
    });

    animationContainer["firstSection"].current.to(
      img.current,
      {
        y: "100dvh",
        ease: "easeIn",
        duration: 4,
      },
      0.5
    );

    animationContainer["firstSection"].current.to(
      window,
      {
        scrollTo: { y: ".second-section", autoKill: true },
        duration: 2,
        ease: "power2.inOut",
        markers: true,
      },
      0
    );

    animationContainer["firstSection"].current.fromTo(
      img.current,
      {
        scale: 1,
        ease: "power2.inOut",
        duration: 2,
      },
      {
        scale: 2,
        ease: "power2.inOut",
        duration: 4,
      },
      1
    );

    // Optional: Add smooth scrolling behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(() => {
    testAnimation();
    firstSectionAnimation();
  }, []);

  const activateAnimation = () => {
    animationContainer["testSection"].current?.play();
  };

  const restartAnimation = () => {
    animationContainer["testSection"].current?.restart();
  };

  const firstSectionActivateAnimation = () => {
    console.log(animationContainer["firstSection"].current);
    animationContainer["firstSection"].current?.play();
  };

  const firstSectionRestartAnimation = () => {
    console.log(animationContainer["firstSection"].current);
    animationContainer["firstSection"].current?.restart();
  };

  return (
    <div ref={mainPageRef} className="main-page">
      <section className="test-section section">
        <div className="button-container-section p-4 flex gap-4">
          <button
            onClick={activateAnimation}
            className="py-2 px-4 text-white bg-amber-600 border border-blue-400"
          >
            Activate
          </button>
          <button
            onClick={restartAnimation}
            className="py-2 px-4 text-white bg-amber-600 border border-blue-400"
          >
            Restart
          </button>
        </div>
        <div className="box-1 w-[800px] h-[500px] bg-red-500">
          {/* <h1 className="box-1-text text-[10px] text-white p-4">Welcome to the right place</h1> */}
          <img className="hibou-title" src="hibouTitle.svg" />
        </div>
        <div className="box-2 w-[100px] h-[100px] bg-blue-500">
          <h1 className="box-2-text text-[10px] text-white p-4">
            Welcome to the right place
          </h1>
        </div>
        <div className="box-3 w-[100px] h-[100px] bg-green-500">
          <h1 className="box-3-text text-[10px] text-white p-4">
            Welcome to the right place
          </h1>
        </div>
        <div className="box-4 w-[100px] h-[100px] bg-black left-0 top-0 flex items-center justify-center">
          {/* <h1 className="box-4-text text-[10px] text-white p-4">Welcome to the right place</h1> */}
          <img
            className="picture"
            src="vite.svg"
            alt="hibou-title"
            width={50}
            height={50}
          />
        </div>
      </section>

      {/* first section */}
      <div className="first-section-btn-container flex gap-4 p-8 bg-[#576B61]">
        <button
          onClick={firstSectionActivateAnimation}
          className="py-2 px-4 text-white bg-[#2A4135] border border-[#73EBB1]"
        >
          Activate animation
        </button>
        <button
          onClick={firstSectionRestartAnimation}
          className="py-2 px-4 text-white bg-[#2A4135] border border-[#73EBB1]"
        >
          Restart animation
        </button>
      </div>
      <section
        ref={firstSectionRef}
        className="first-section h-dvh w-dvw bg-[#73EBB1]  "
      >
        <div ref={s1} className="h-dvh w-dvw grid place-items-center relative">
          <img
            ref={img}
            className="absolute top-1/2 left-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 border border-red-500"
            src="hibouTitle.svg"
            alt="Animated image"
          />
          <h1>Section 1</h1>
        </div>

        {/* <div ref={bridge} className="bridge h-[200dvh] w-dvw bg-[#8aa096]" /> */}
        <div ref={s2} className="s2 h-dvh w-dvw bg-[#73EBB1]"></div>
      </section>

      {/* second section */}
      <section
        ref={secondSectionRef}
        className="second-section section"
      ></section>

      {/* third section */}
      <section
        ref={thirdSectionRef}
        className="third-section section"
      ></section>
    </div>
  );
}

export default Test;

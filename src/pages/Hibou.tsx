import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hibou = () => {
  const hibouRef = useRef<HTMLElement>(null);

  const hibouAnimation = () => {
    gsap.fromTo(
      ".box",
      { y: 0, scale: 1 },
      {
        y: 300, // move down 300px (or any target)
        scale: 2, // scale up to 2x
        duration: 1, // total animation time
        ease: "power2.inOut",
        onComplete() {
          // when the move finishes, shrink back to normal
          gsap.to(".box", {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
          });
        },
      }
    );
  };

  useGSAP(() => {
    hibouAnimation();
  }, []);
  return (
    <section
      ref={hibouRef}
      className="h-dvh w-dvw bg-pink-200 flex justify-center items-center"
    >
      <div className="box w-[100px] h-[100px] bg-red-500"></div>
    </section>
  );
};

export default Hibou;

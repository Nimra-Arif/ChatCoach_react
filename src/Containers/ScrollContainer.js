import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollContainer = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0
      },
      {
        translateX: "-700vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 bottom",
          scrub: 0.6,
          pin: true
        }
      }
    );
  });

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-[100vh] w-[400vw] flex flex-row relative"
        >
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollContainer;

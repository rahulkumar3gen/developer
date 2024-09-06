import { useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Sphere = () => {
  const container = useRef();
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);
  return (
    <div className="h-screen w-full relative ">
      <div ref={container} className="h-screen w-full ">
        <div className="pt-20 md:pt-0  ">
          <h1 className=" text-white text-6xl md:text-4xl font-bold text-center ">
            HELLO 👋
          </h1>
          <h2 className=" text-white text-2xl md:text-xl pt-10 md:pt-0 font-bold text-center px-5">
            I help designers, small agencies and businesses bring their ideas to
            life. On time and on budget.
          </h2>
          <h2 className="text-gray-400 md:text-gray-600 pt-10 md:pt-0 text-xl font-bold text-center">
            Helping Companies to reach their goal by connecting all dots between
            Design & Code
          </h2>
        </div>
        <div className="pt-32 md:pt-0">
          <svg viewBox="0 0 250 90" className="">
            <path
              id="curve"
              // stroke="white"
              fill="none"
              d="m0, 88.5c61.37, 0 61.5-68, 126.5-68, 58, 0, 51, 68, 123, 68"
            />
            <text className="text-[10px] md:text-[6px] uppercase fill-white">
              {[...Array(3)].map((_, i) => {
                return (
                  <textPath
                    key={i}
                    ref={(ref) => (texts.current[i] = ref)}
                    href="#curve"
                    startOffset={i * 40 + "%"}
                  >
                    Powered by VS Code and Coffee
                  </textPath>
                );
              })}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sphere;

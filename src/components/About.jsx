import React from "react";
import "../style.css";
import { useTypewriter } from "react-simple-typewriter";

const About = () => {
  const [typeEffect] = useTypewriter({
    words: ["DEVELOPER", "DESIGNER", "ENGINEER"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });
  return (
    <>
      <div className="Home h-screen w-full md:w-1/3 z-10 relative top-0 left-0  content-center  ">
        <div className="h-1/2  content-end ">
          <h1 className="AboutName  text-white text-8xl font-bold text-center">
            RAHUL
          </h1>
        </div>
        <div className="h-1/2">
          <div className="h-1/2">
            <h1 className="AboutText text-5xl md:text-6xl font-bold text-center">
              {typeEffect}
            </h1>
          </div>
          <div className="h-1/2  md:hidden">
            <h1 className="text-gray-500 font-bold text-center">
              For better experience open in PC
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

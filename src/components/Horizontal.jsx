import React, { useRef } from "react";
import "../style.css";
import ImageContainer from "./ImageContainer";
import { useScroll, useTransform, motion } from "framer-motion";

const Horizontal = () => {
  const images = [
    "./Untitled design.png",
    "./NetflixGPT.png",
    "./dicloMart.png",
  ];
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);
  return (
    <>
      <section
        ref={target}
        className="Horizontal  w-auto relative  bg-black h-[250vh] "
      >
        <div className="HorizontalItem h-[100vh]  sticky top-0 overflow-hidden ">
          <div className="h-[10vh]" />
          <motion.main
            style={{ x }}
            className="flex bg-black h-[250vh] gap-4	absolute"
          >
            <a
              className=" w-screen md:w-[80vw] cursor-pointer"
              href="https://tripzada.com/"
              target="_blank"
            >
              <img
                className="Image h-[60vh] md:h-[80vh] w-screen md:w-[70vw] "
                src={images[0]}
              />
            </a>
            <a
              className=" w-screen md:w-[80vw] cursor-pointer"
              href="https://netflixgpt-a652d.web.app/"
              target="_blank"
            >
              <img
                className="Image h-[60vh] md:h-[80vh] md:w-[70vw] "
                src={images[1]}
              />
            </a>
            <a
              className="w-screen md:w-[80vw] cursor-pointer"
              href="https://diclo-mart.web.app/"
              target="_blank"
            >
              <img
                className="Image h-[60vh] md:h-[80vh] md:w-[70vw] "
                src={images[2]}
              />
            </a>
          </motion.main>
          <main className="relative content-center justify-center">
            <p className="text-red-700 text-center pt-20 font-extrabold text-6xl md:text-8xl ">
              CHECKOUT SOME PROJECTS
            </p>
          </main>
        </div>
      </section>
    </>
  );
};

export default Horizontal;

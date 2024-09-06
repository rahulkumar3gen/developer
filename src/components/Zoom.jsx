import React, { useRef } from "react";
import "../style.css";
import { useScroll, useTransform, motion } from "framer-motion";
// import { Picture1 } from "./img1.jpg";

const Zoom = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const pictures = [
    {
      src: "./img1.png",
      scale: scale4,
    },

    {
      src: "./img6.jpg",
      scale: scale4,
    },
    {
      src: "./img3.jpg",
      scale: scale4,
    },
    {
      src: "./img7.jpg",
      scale: scale4,
    },
    {
      src: "./img4.jpg",
      scale: scale4,
    },
    {
      src: "./img2.jpg",
      scale: scale4,
    },
  ];
  return (
    <>
      <div ref={container} className="ZoomContainer">
        <div className="ZoomSticky">
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div style={{ scale }} key={index} className="ZoomEl">
                <div className="ZoomImage">
                  <img className="" src={src} alt="image" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div>
        <img className="Zoommobile" src={pictures[0].src} />
      </div>
    </>
  );
};

export default Zoom;

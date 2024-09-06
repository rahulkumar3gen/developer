import React from "react";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Fed = () => {
  const image = [
    "./img1.png",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
  ];

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div>
      <main className="overflow-hidden bg-black relative">
        <div className="h-[20vh]" />
        <div ref={container}>
          <Slide
            src={image[0]}
            direction={"left"}
            left={"-40%"}
            progress={scrollYProgress}
          />
          <Slide
            src={image[1]}
            direction={"right"}
            left={"-25%"}
            progress={scrollYProgress}
          />
          <Slide
            src={image[2]}
            direction={"left"}
            left={"-75%"}
            progress={scrollYProgress}
          />
        </div>
        <div className="h-[20vh]" />
      </main>
    </div>
  );
};

export default Fed;

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};
const Phrase = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[7.5vw] text-white">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

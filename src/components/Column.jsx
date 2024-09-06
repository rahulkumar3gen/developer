import React from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import "../style.css";

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className="imageContainer">
            <img src={src} alt="image" fill="true" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;

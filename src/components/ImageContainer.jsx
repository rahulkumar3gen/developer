import React from "react";
const ImageContainer = ({ imageSource, description }) => {
  return (
    <div className="ImageContainer  ">
      <img className="Image h-[80vh] w-[80vw] " src={imageSource} />
    </div>
  );
};

export default ImageContainer;

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import About from "./About";
import Sphere from "./Sphere";

const Cylinder = () => {
  return (
    <>
      <div className=" h-screen w-full bg-black fixed top-10 left-0 z-0">
        <Canvas camera={{ fov: 35 }}>
          <OrbitControls enableZoom={false} />

          <ambientLight />
          <Scene />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={8.0} // The bloom intensity.
              luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            />
            {/* <ToneMapping adaptive /> */}
          </EffectComposer>
        </Canvas>
        {/* <About />
        <Sphere /> */}
      </div>
    </>
  );
};

export default Cylinder;

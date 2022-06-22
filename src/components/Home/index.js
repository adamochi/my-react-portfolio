import React, { Suspense } from "react";
import "./index.scss";
import Loader from "react-loaders";
/* 3D stuff */
// import Boxtwo from "../Boxtwo";
import Oldpc from "../Oldpc";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <div className="homepage">
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Oldpc />
        </Suspense>
      </Canvas>

      <h1>Hello, I'm an aspiring Web Developer based in Australia!</h1>

      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default Home;

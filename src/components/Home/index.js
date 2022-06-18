import React, { Suspense } from "react";
import "./index.scss";
import Loader from "react-loaders";

/* 3D stuff */
import Box from "../Box";
import Boxtwo from "../Boxtwo";
import Sphere from "../AnimatedSphere";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={<span>Loading. . .</span>}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={<span>Loading. . .</span>}>
          <Boxtwo />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={<span>Loading. . .</span>}>
          <Sphere />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={<span>Loading. . .</span>}>
          <Sphere />
        </Suspense>
      </Canvas>

      <Loader type="pacman" />
    </div>
  );
};

export default Home;

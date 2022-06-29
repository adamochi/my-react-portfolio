import React, { Suspense } from "react";
import "./index.scss";

/* 3D stuff */
// import Chef from "../Cheflaptop";
// import Baked from "../Baked-chef";
import FinalChef from "../Final-chef";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Computer = () => {
  return (
    <div className="homepage">
      <Canvas camera={{ fov: 45, position: [18, 8, 3] }} className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={1.45} />
        <Suspense fallback={null}>
          <FinalChef />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Computer;

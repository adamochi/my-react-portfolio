import React, { Suspense } from "react";
import "./index.scss";

/* 3D stuff */
import Chef from "../Cheflaptop";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Computer = () => {
  return (
    <div className="homepage container">
      <Canvas camera={{ fov: 40, position: [10, 2, 3] }} className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Chef />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Computer;

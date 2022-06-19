import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei/core";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1.5, 100, 200]} scale={1.6}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.3}
        speed={2.5}
      />
    </Sphere>
  );
};

export default AnimatedSphere;

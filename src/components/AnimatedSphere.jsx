import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei/core';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={1}
        speed={2.5}
      />
    </Sphere>
  );
}

export default AnimatedSphere;

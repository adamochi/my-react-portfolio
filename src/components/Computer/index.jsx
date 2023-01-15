/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import './index.scss';

/* 3D stuff */
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FinalChef from '../Final-chef';

function Computer() {
  return (
    <Canvas camera={{ fov: 45, position: [9.5, 9.5, 20] }}>
      <OrbitControls enableZoom />
      <ambientLight intensity={1.45} />
      <Suspense fallback={null}>
        <FinalChef />
      </Suspense>
    </Canvas>
  );
}

export default Computer;

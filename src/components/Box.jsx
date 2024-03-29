/* eslint-disable react/no-unknown-property */
import React from 'react';

import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import texture from '../assets/images/mossyrock.jpg';

function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export default Box;

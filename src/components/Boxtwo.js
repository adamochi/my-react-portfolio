import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "../assets/images/mossyrock.jpg";

const Boxtwo = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Boxtwo;

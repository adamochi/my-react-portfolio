import React from "react";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="lightskyblue" />
    </mesh>
  );
};

export default Box;

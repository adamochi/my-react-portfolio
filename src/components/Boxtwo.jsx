/* eslint-disable react/no-unknown-property */
import React from 'react';

function Boxtwo() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default Boxtwo;

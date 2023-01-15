/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/cheflaptop.glb');
  useFrame(() => {
    if (!group.current) {
      return;
    }
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        scale={0.45}
        geometry={nodes.chef.geometry}
        material={materials.palette}
        position={[0.3, -2.5, 0]}
        rotation={[1.55, 0, 3.5]}
      />
    </group>
  );
}

useGLTF.preload('/cheflaptop.glb');
// position={[0.3, -2.2, 0]}
// rotation={[1.55, 0, 3.5]}

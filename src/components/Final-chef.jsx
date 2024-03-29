/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/final-chef.glb');

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y += 0.0035;
  });

  return (
    <group
      rotation={[0, 3, 0]}
      position={[0, 1, 0]}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.chef.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-9.35, -2.8, 3.93]}
        scale={[14.13, 1, 9.89]}
      />
    </group>
  );
}

useGLTF.preload('/final-chef.glb');

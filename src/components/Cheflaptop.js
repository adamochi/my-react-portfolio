import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheflaptop.glb");

  useFrame(() => {
    if (!group.current) {
      return;
    }
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        scale={0.5}
        geometry={nodes.chef.geometry}
        material={materials.palette}
        position={[0.4, -2.5, 0]}
        rotation={[1.6, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/cheflaptop.glb");

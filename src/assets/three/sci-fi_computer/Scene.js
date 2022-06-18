/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Tuuttipingu (https://sketchfab.com/Tuuttipingu)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sci-fi-computer-71daf747a9b54b9299cc495533141eb5
title: Sci-fi Computer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.scifi_computer_screen_0.geometry} material={materials.screen} />
            <mesh geometry={nodes.scifi_computer_computer_0.geometry} material={materials.computer} />
            <mesh geometry={nodes.scifi_computer_keyboard_0.geometry} material={materials.keyboard} />
            <mesh geometry={nodes.scifi_computer_keys_0.geometry} material={materials.keys} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

import React, { useRef, Suspense, useState } from "react";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  console.log(props);
  const { nodes, materials } = useGLTF("models/ModelOne/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.shoe_shoe_0.geometry}
        material={materials.shoe}
        material-color={props.selectedColor ? props.selectedColor : null}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.shoelace_shoelace_0.geometry}
        material={materials.shoelace}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("models/ModelOne/scene.gltf");

export const ModelOne = ({ selectedColor }) => {
  return (
    <Canvas camera={{ position: [30, 20, 20] }}>
      <Stage preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={0.9} angle={0.1} penumbra={1} castShadow>
            <Model selectedColor={selectedColor} />
            <OrbitControls
              enableRotate={true}
              enableZoom={true}
              enablePan={false}
              enableDamping={true}
            />
          </spotLight>
        </Suspense>
      </Stage>
    </Canvas>
  );
};

import React, { Suspense } from "react";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Model(props) {
  const { selectedColor } = props;
  const { nodes, materials } = useGLTF("models/ModelThree/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Blue_Vans_Shoe}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/ModelThree/scene.gltf");

export const ModelThree = ({ selectedColor }) => {
  return (
    <Canvas camera={{ position: [10, 5, 10], zoom: 3 }}>
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

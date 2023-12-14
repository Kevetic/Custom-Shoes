import React, { Suspense } from "react";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("models/ModelFour/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.147, -0.007]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            geometry={nodes.Low_Poly_Material001_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/ModelFour/scene.gltf");

export const ModelFour = () => {
  return (
    <Canvas camera={{ position: [1, 1, 1], zoom: 7 }}>
      <Stage preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={0.9} angle={0.1} penumbra={1} castShadow>
            <Model />
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

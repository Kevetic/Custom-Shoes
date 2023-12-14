import React, { useRef, Suspense, useState, useEffect, useMemo } from "react";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const ModelOne = ({ selectedColor }) => {
  const { nodes, materials } = useGLTF("models/ModelOne/scene.gltf");
  const { color } = selectedColor;

  const [currentColor, setCurrentColor] = useState("#fff");

  useEffect(() => {
    setCurrentColor(color);
  }, [color]);

  useEffect(() => {
    if (materials.shoe) {
      materials.shoe.color.set(currentColor);
    }
  }, [currentColor, materials.shoe]);

  return (
    <Canvas camera={{ position: [30, 20, 20] }}>
      <Stage preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={0.9} angle={0.1} penumbra={1} castShadow>
            <group dispose={null}>
              <mesh
                geometry={nodes.shoe_shoe_0.geometry}
                material={materials.shoe}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              ></mesh>
              <mesh
                geometry={nodes.shoelace_shoelace_0.geometry}
                material={materials.shoelace}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
            </group>
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

useGLTF.preload("models/ModelOne/scene.gltf");

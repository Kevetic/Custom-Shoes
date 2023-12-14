import React, { useRef, Suspense, useEffect, useState } from "react";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models/ModelTwo/scene.gltf"
  );
  const { selectedColor, currentColor } = props;
  const { actions } = useAnimations(animations, group);

  console.log(selectedColor);

  useEffect(() => {
    if (materials.Left_tex) {
      materials.Left_tex.color.set(selectedColor.color);
    }
    if (materials.Right_tex) {
      materials.Right_tex.color.set(selectedColor.color);
    }
    if (materials.Laces_tex) {
      materials.Laces_tex.color.set(selectedColor.laceOne);
    }
  }, [
    selectedColor,
    materials.Left_tex,
    materials.Right_tex,
    materials.Laces_tex,
  ]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Left_Shoe_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Left_tex}
                />
              </group>
              <group name="Right_Shoe_1">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.Right_tex}
                />
              </group>
              <group name="laces_2">
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.Laces_tex}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/ModelTwo/scene.gltf");

export const ModelTwo = ({ selectedColor }) => {
  const [currentColor, setCurrentColor] = useState({
    color: "#fff",
    laceOne: "#fff",
  });
  const { color } = selectedColor;

  useEffect(() => {
    setCurrentColor(selectedColor);
  }, [color]);

  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 10 }}>
      <Stage preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={0.9} angle={0.1} penumbra={1} castShadow>
            <Model selectedColor={selectedColor} currentColor={currentColor} />
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

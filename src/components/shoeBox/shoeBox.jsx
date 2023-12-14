import React, { useRef, Suspense, useState, useEffect } from "react";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Stage,
} from "@react-three/drei";
import { Canvas, act } from "@react-three/fiber";

function Model(props) {
  let animate = props.animate.animate;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/ShoeBox/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animate) {
      actions.CINEMA_4D_Main.play();
    }
  }, [actions, animate]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.521}
        >
          <group name="BOX_nikefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BOX" position={[0, 0.05, 0]}>
                  <group
                    name="Plane_Plane_002_Material_001"
                    position={[0, 11.551, -9.859]}
                  >
                    <mesh
                      name="Plane_Plane_002_Material_001_TOP_0"
                      geometry={
                        nodes.Plane_Plane_002_Material_001_TOP_0.geometry
                      }
                      material={materials.material}
                    />
                  </group>
                  <group name="Plane_Plane_002_carton" position={[0, 0.05, 0]}>
                    <mesh
                      name="Plane_Plane_002_carton_BOTTOM_0"
                      geometry={nodes.Plane_Plane_002_carton_BOTTOM_0.geometry}
                      material={materials.BOTTOM}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/ShoeBox/scene.gltf");

export const ShoeBox = (animate, setLandingPage) => {
  return (
    <Canvas camera={{ position: [9, 3, 10], zoom: 20 }}>
      <Stage preset="rembrandt" intensity={0} environment="city">
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={0.9} angle={0.1} penumbra={1} castShadow>
            <Model animate={animate} />
          </spotLight>
        </Suspense>
      </Stage>
    </Canvas>
  );
};

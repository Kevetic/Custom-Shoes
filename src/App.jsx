import { Canvas } from "@react-three/fiber";
import "./App.css";
import React, { useRef, Suspense, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ModelOne } from "./components/modelOne/ModelOne";
import { ModelTwo } from "./components/modelTwo/ModelTwo";
import { ModelThree } from "./components/modelThree/ModelThree";
import { ModelFour } from "./components/modelFour/ModelFour";

function App() {
  const [color, setColor] = useState("");
  let defaultColors = ["blue", "green", "red", "purple"];

  const handleClick = (e) => {
    setColor(e.target.id);
  };

  const ref = useRef();
  return (
    <>
      <ModelOne />
      {/* <ModelTwo /> */}
      {/* <ModelThree /> */}
      {/* <ModelFour /> */}
    </>
  );
}

export default App;

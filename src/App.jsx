import { Canvas } from "@react-three/fiber";
import "./App.css";
import React, { useRef, Suspense, useState, useEffect } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ModelOne } from "./components/modelOne/ModelOne";
import { ModelTwo } from "./components/modelTwo/ModelTwo";
import { ModelThree } from "./components/modelThree/ModelThree";
import { ModelFour } from "./components/modelFour/ModelFour";
import Landing from "./views/Landing/Landing";

function App() {
  const [landingPage, setLandingPage] = useState(true);
  const [currentShoe, setCurrentShoe] = useState();
  const ref = useRef();

  let models = [
    { comp: <ModelOne />, id: 1 },
    { comp: <ModelTwo />, id: 2 },
    { comp: <ModelThree />, id: 3 },
    { comp: <ModelFour />, id: 4 },
  ];

  const handleClick = (model) => {
    let test = models.map((activeModel, idx) => {
      if (activeModel.id === model) {
        setCurrentShoe(activeModel.comp);
      }
    });
  };

  return landingPage ? (
    <div className="shoebox-container">
      <Landing setLandingPage={setLandingPage} />
    </div>
  ) : (
    <div className="shoe-container">
      <div className="small">
        {models.map((model, idx) => (
          <button
            key={model.id}
            onClick={() => handleClick(model.id)}
            className="previewBtn"
          >
            {model.comp}
          </button>
        ))}
      </div>
      <div>{currentShoe}</div>
    </div>
  );
}

export default App;

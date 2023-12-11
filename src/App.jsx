import { Canvas } from "@react-three/fiber";
import "./App.css";
import React, { useRef, Suspense, useState, useEffect } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ModelOne } from "./components/modelOne/ModelOne";
import { ModelTwo } from "./components/modelTwo/ModelTwo";
import { ModelThree } from "./components/modelThree/ModelThree";
import { ModelFour } from "./components/modelFour/ModelFour";
import Landing from "./views/Landing/Landing";
import ColorPicker from "./components/colorPicker/ColorPicker";

function App() {
  const [landingPage, setLandingPage] = useState(true);
  const [currentShoe, setCurrentShoe] = useState();
  const [selectedColor, setSelectedColor] = useState("");
  console.log("in the app:", selectedColor);
  const ref = useRef();

  let models = [
    {
      comp: <ModelOne selectedColor={selectedColor} />,
      id: 1,
      colors: ["red", "blue", "purple"],
    },
    {
      comp: <ModelTwo selectedColor={selectedColor} />,
      id: 2,
      colors: ["brown", "pink", "orange"],
    },
    {
      comp: <ModelThree selectedColor={selectedColor} />,
      id: 3,
      colors: ["green", "yellow", "gray"],
    },
    {
      comp: <ModelFour selectedColor={selectedColor} />,
      id: 4,
      colors: ["red", "pink", "teal"],
    },
  ];

  const handleClick = (model) => {
    models.map((activeModel, idx) => {
      if (activeModel.id === model) {
        setCurrentShoe(activeModel);
      }
    });
  };

  return landingPage ? (
    <div className="shoebox-container">
      <Landing setLandingPage={setLandingPage} />
    </div>
  ) : (
    <>
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
        {currentShoe && currentShoe.comp}
      </div>
      {currentShoe ? (
        <div className="picker-container">
          Color Options:
          <span className="color-options">
            <ColorPicker
              currentShoe={currentShoe}
              setSelectedColor={setSelectedColor}
            />
          </span>
        </div>
      ) : null}
    </>
  );
}

export default App;

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
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";
import CusomizationView from "./views/CusomizationView";

function App() {
  const [landingPage, setLandingPage] = useState(true);
  const [currentShoe, setCurrentShoe] = useState();
  const [selectedColor, setSelectedColor] = useState("");
  const [close, setClose] = useState(false);

  useEffect(() => {
    setCurrentShoe();
    setSelectedColor("");
  }, [close]);

  let models = [
    {
      comp: (
        <ModelOne
          key={new Date().getTime()}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          currentShoe={currentShoe}
        />
      ),
      id: 1,
      colors: [
        { color: "rgb(206, 17, 65)", option: "Chicago" },
        { color: "#7BAFD4", option: "UNC" },
        { color: "#fff", option: "Shadow 2.0" },
      ],
    },
    {
      comp: (
        <ModelTwo
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          currentShoe={currentShoe}
        />
      ),
      id: 2,
      colors: [
        { color: "#fff", laceOne: "#fff", option: "Traditional" },
        { color: "#000", laceOne: "#000", option: "Triple Black" },
        {
          color: "#FF69B4",
          laceOne: "#850101",
          option: "Valentine",
        },
      ],
    },
    {
      comp: (
        <ModelThree
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          currentShoe={currentShoe}
        />
      ),
      colors: [{ option: "no current model" }],
      id: 3,
    },
    {
      comp: (
        <ModelFour
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          currentShoe={currentShoe}
        />
      ),
      id: 4,
      colors: [{ option: "no current model" }],
    },
  ];

  const handleClick = (model) => {
    models.map((activeModel, idx) => {
      if (activeModel.id === model) {
        setCurrentShoe(activeModel);
      }
    });
  };

  const handleClose = () => {
    setClose(!close);
    setCurrentShoe();
    setSelectedColor({ color: "#fff", laceOne: "#fff" });
  };

  return landingPage ? (
    <div className="shoebox-container">
      <Landing setLandingPage={setLandingPage} />
    </div>
  ) : (
    <div className="customizer" style={{ display: "flex", overflow: "hidden" }}>
      <div className="shoe-container">
        <div className="small" style={{ height: currentShoe ? "0px" : "100%" }}>
          {models.map((model, idx) => (
            <AnimatePresence>
              <motion.div
                style={{ opacity: !currentShoe ? 1 : 0 }}
                whileHover={{ scale: 0.9, y: 50 }}
                animate={{
                  boxShadow: "5px 10px 0 rgba(0, 0, 0, 0.4)",
                  border: "1px solid gray",
                }}
                key={model.id}
                onClick={() => handleClick(model.id)}
                className="previewBtn"
              >
                {model.comp}
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
        {currentShoe ? (
          <CusomizationView
            handleClose={handleClose}
            currentShoe={currentShoe}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;

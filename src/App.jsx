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
      comp: <ModelOne selectedColor={selectedColor} />,
      id: 1,
      colors: [
        { color: "rgb(206, 17, 65)", option: "Chicago" },
        { color: "#7BAFD4", option: "UNC" },
        { color: "#01796f", option: "Union" },
      ],
    },
    {
      comp: <ModelTwo selectedColor={selectedColor} />,
      id: 2,
      colors: [
        { color: "#fff", option: "Traditional" },
        { color: "#000", option: "Triple Black" },
        {
          color: "#FF69B4",
          laceOne: "#850101",
          option: "Valentine",
        },
      ],
    },
    {
      comp: <ModelThree selectedColor={selectedColor} />,
      colors: [{ option: "no current model" }],
      id: 3,
    },
    {
      comp: <ModelFour selectedColor={selectedColor} />,
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
  };

  return landingPage ? (
    <div className="shoebox-container">
      <Landing setLandingPage={setLandingPage} />
    </div>
  ) : (
    <div className="customizer" style={{ display: "flex" }}>
      <div className="shoe-container">
        <div className="small">
          {models.map((model, idx) => (
            <AnimatePresence>
              <motion.div
                style={{ opacity: !currentShoe ? 1 : 0 }}
                whileHover={{ scale: 2, y: 50 }}
                animate={{
                  boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.4)",
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
          <AnimatePresence>
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              className="previewBtn"
            >
              <motion.button
                whileHover={{ scale: 1.5 }}
                style={{
                  margin: "40px",
                  height: "40px",
                  width: "40px",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  borderRadius: "15px",
                  zIndex: 9999,
                  cursor: "pointer",
                  background: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleClose()}
              >
                <CloseIcon />
              </motion.button>
              {currentShoe.comp}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.h1
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            Select a Shoe
          </motion.h1>
        )}
      </div>
      {currentShoe ? (
        <div className="picker-container">
          <ColorPicker
            style={{ display: "flex" }}
            currentShoe={currentShoe}
            setCurrentShoe={setCurrentShoe}
            setSelectedColor={setSelectedColor}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ColorPicker from "../components/colorPicker/ColorPicker";

export default function CusomizationView({
  handleClose,
  currentShoe,
  setSelectedColor,
}) {
  return (
    <>
      <div className="customization-container">
        <div className="customization-header">
          <CloseIcon className="customization-close" onClick={handleClose} />
          <h1>Select Your Model</h1>
        </div>
      </div>
      <div className="interactive-container">
        <div className="shoePreview-container">{currentShoe.comp}</div>
        <div className="colorpicker-container">
          <ColorPicker
            currentShoe={currentShoe}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
    </>
  );
}

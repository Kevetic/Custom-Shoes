import React, { useState } from "react";

export default function ColorPicker({ currentShoe, setSelectedColor }) {
  console.log("in color picker:", setSelectedColor);
  const [currentOptions, setCurrentOptions] = useState([
    "RED",
    "BLUE",
    "PURPLE",
    "ORANGE",
  ]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return currentOptions.map((colors) => {
    return (
      <button
        style={{ background: colors }}
        className="colorBtns"
        onClick={() => handleColorSelect(colors)}
      />
    );
  });
}

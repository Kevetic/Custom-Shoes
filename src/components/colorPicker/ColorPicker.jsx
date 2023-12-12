import React, { useState } from "react";

export default function ColorPicker({ currentShoe, onColorSelect }) {
  const { colors } = currentShoe;

  const handleColorSelect = (color) => {
    console.log("here:", color);
    onColorSelect(color); // Call the callback
  };

  return colors.map((color) => {
    return (
      <button
        style={{ background: color }}
        className="colorBtns"
        onClick={() => handleColorSelect(color)}
      />
    );
  });
}

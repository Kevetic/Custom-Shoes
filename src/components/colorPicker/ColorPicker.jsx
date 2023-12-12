import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ColorPicker({ currentShoe, setSelectedColor }) {
  const { colors } = currentShoe;

  return colors.map((color) => {
    return (
      <motion.h1
        whileHover={{
          textDecoration: "underline",
          textDecorationColor: color.color,
          textDecorationStyle: "wavy",
        }}
        initial={{ opacity: 0, y: 700 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="colorBtns"
        onClick={() => setSelectedColor(color)}
      >
        {color.option}
      </motion.h1>
    );
  });
}

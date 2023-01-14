import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);

  }
  return (
    <div
      onclick={handleClick} 
      className="child"  
      style={{ backgroundColor: color }}
    ></div>

  );
}

export default Child;

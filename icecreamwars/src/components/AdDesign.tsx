import { useState } from "react";
import { Ad } from "./Ad";

export function AdDesign() {
    //state hook as two parts
    //variable to track the state, meaning the value
    //there is a function that is used to change the state

    const [flavor, setFlavor] = useState ("Chocolate");
    const [isLight, setIsLight] = useState(true);
    const [fontSize, setFontSize] = useState(24)

  return (
    <div id="AdDesign">
      <h2>Ad Design</h2>

      <h2>What to support:</h2>
      <Ad flavor={flavor} isLight={isLight} fontSize={fontSize} />
      <div className="button-bar">
      <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
      <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
      <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
      </div>

      
      <h2>Color Theme</h2>
      <div className="button-bar">
      <button onClick={() => setIsLight(true)}>Light</button>
      <button onClick={() => setIsLight(false)}>Dark</button>
      </div>

      <h2>Font Sizew</h2>
      <div className="button-bar">
      <button onClick={() => setFontSize(fontSize+1)}>Up</button>
      <input type="number"></input>
      <button onClick={() => setFontSize(fontSize-1)}>Down</button>
      </div>
    </div>
  );
}

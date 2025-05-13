import React from "react";
import PercentView from "./PercentView";
import { useState } from "react";
import "../App.css";

const makeColor = (p: number): string => {
  let hue: number = p * 120;
  return `hsl(${hue}, 100%, 50%)`;
};
//nejmensi = cervena barva, stredni = zluta, nejvetsi = zelena

let current: number = 50;

function App() {
  const initialValue: number = 50;
  const [rangeValue, setRangeValue] = useState(100)
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={initialValue}
          onChange={(e) => setRangeValue(parseInt(e.target.value))}
        />
      </div>
      <PercentView value={rangeValue} max={100} makeColor={makeColor} />
    </>
  );
}

export default App;

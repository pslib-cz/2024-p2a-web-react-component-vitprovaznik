import React from "react";
import PercentView from "./PercentView";
import { useState } from "react";
import "../App.css";

const makeColor = (p: number): string => {
  let hue: number = p * 120;
  return `hsl(${hue}, 100%, 50%)`;
};
//nejmensi = cervena barva, stredni = zluta, nejvetsi = zelena

function App() {
  const [value, setValue] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <>
      <form>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />
      </form>
      <PercentView value={value} max={max} makeColor={makeColor} />
    </>
  );
}

export default App;

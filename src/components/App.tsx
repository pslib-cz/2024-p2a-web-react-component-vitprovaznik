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
  return (
    <>
      <PercentView value={20} max={100} makeColor={makeColor} />

      <PercentView value={50} max={100} makeColor={makeColor} />

      <PercentView value={60} max={100} makeColor={makeColor} />
    </>
  );
}

export default App;

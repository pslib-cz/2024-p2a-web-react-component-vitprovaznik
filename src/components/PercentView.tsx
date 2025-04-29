import { FC } from "react";
import style from "./PercentView.module.css";

type PercentViewType = {
  value: number;
  max: number;
  makeColor: (percent: number) => string;
};

const PercentView: FC<PercentViewType> = ({ max, value, makeColor }) => {
  if (value > max) {
    value = max;
  }
  return (
    <div
      className={style.percentview}
      style={{ color: makeColor(value / max), fontSize: "2em" }}
    >
      {value}/{max}
    </div>
  );
};
export default PercentView;

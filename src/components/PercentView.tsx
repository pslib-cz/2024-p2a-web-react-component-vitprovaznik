import { FC } from "react";
import style from "./PercentView.module.css";

type PercentViewType = {
  value: number;
  max: number;
  makeColor: (percent: number) => string;
};

const PercentView: FC<PercentViewType> = ({ max, value, makeColor }) => {
  // if (value > max) {
  //   value = max;
  // }
  let percent = value/max;
  return (
    <div
      className={style.percentview}
      style={{ color: makeColor(percent), fontSize: "2em" }}
    >
      {percent*100 + "%"}
      <div className={style.bar}
      style={{backgroundColor: makeColor(percent), width: value/max *100 + "%", height: "20px"}}>

      </div>
    </div>
  );
};
export default PercentView;

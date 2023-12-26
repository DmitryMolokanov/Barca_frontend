import { useState, FC } from "react";
import { hisoryInfo } from "./historyInfo";

interface DateInfoProps {
  getDate: (id: number) => void;
}

const DateInfo: FC<DateInfoProps> = ({ getDate }) => {
  const [pointData, setPointData] = useState<number>(1);

  function selectData(id: number) {
    getDate(id);
    setPointData(id);
  }
  return (
    <div className="years-container">
      {hisoryInfo.map((info) => {
        return (
          <div
            key={info.id}
            className={
              info.id === pointData
                ? "point-buttons-year-container"
                : "buttons-year-container"
            }
          >
            <button
              className="buttons-year"
              onClick={() => selectData(info.id)}
            >
              {info.date}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DateInfo;

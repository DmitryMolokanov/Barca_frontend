import { useState } from "react";
import Header from "../components/main-page/header/Header";
import "../components/historyPage/History.scss";
import TopImg from "../components/historyPage/TopImg";
import DateInfo from "../components/historyPage/historyInfo/DateInfo";
import { hisoryInfo } from "../components/historyPage/historyInfo/historyInfo";
import { historyInfo } from "../components/interface/interface";
import HistoryInfoContainer from "../components/historyPage/historyInfo/HistoryInfoContainer";
import Footer from "../components/UI/Footer";

const History = () => {
  const [info, setInfo] = useState<historyInfo>(hisoryInfo[0]);

  function showInfo(id: number) {
    const info = hisoryInfo.find((el) => el.id === id);
    setInfo(info);
  }

  return (
    <div>
      <Header />
      <TopImg />
      <DateInfo getDate={showInfo} />
      <HistoryInfoContainer info={info} />

      <Footer />
    </div>
  );
};

export default History;

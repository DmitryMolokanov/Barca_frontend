import { useState } from "react";
import Header from "../components/main-page/header/Header";
import { allTrophy } from "../components/trophy/trophInfo/TrophyInfo";
import { trophy } from "../components/interface/interface";
import "../components/trophy/Trophy.scss";
import TrophySelect from "../components/trophy/trophySelect/TrophySelect";
import TrophySide from "../components/trophy/trophySide/TrophySide";
import NoSelectMessage from "../components/trophy/trophySelect/NoSelectMessage";
import TrophyInfoSelect from "../components/trophy/trophySelect/TrophyInfoSelect";
import SelectSeason from "../components/trophy/trophySelect/SelectSeason";
import SeasonTrophies from "../components/trophy/trophySelect/SeasonTrophies";
import Footer from "../components/UI/Footer";

const Trophies = () => {
  const [selectTropfy, setSelectTropfy] = useState<trophy>();
  const [seasonTrophy, setSeasonTrophy] = useState<trophy[]>();
  const [showListSeason, setShowListSeason] = useState<boolean>(false);
  const [showSeasonOrCup, setShowSeasonOrCup] = useState<string>("season");
  const [season, setSeason] = useState<string>();

  function getTrophy(name: string): void {
    const result = allTrophy.find((cup) => cup.name === name);
    setSelectTropfy(result);
  }
  function getSeasonTrophy(data: trophy[]) {
    setSeasonTrophy(data);
  }
  function getSeason(season: string) {
    setSeason(season);
  }

  return (
    <div>
      <Header />
      <div className="trophy-field">
        <TrophySide
          allTrophy={allTrophy}
          side={"leftside"}
          sideContainer={"trophy-leftside-container"}
        />
        <div className="trophy-main-container">
          <div className="select-conteiner">
            <TrophySelect
              trophy={allTrophy}
              getTrophy={getTrophy}
              setShowSeasonOrCup={setShowSeasonOrCup}
            />
            <SelectSeason
              showListSeason={showListSeason}
              setShowListSeason={setShowListSeason}
              getSeasonTrophy={getSeasonTrophy}
              setShowSeasonOrCup={setShowSeasonOrCup}
              seasonDate={getSeason}
            />
          </div>
          {selectTropfy ? (
            <TrophyInfoSelect
              img={selectTropfy.img}
              years={selectTropfy.years}
              show={showSeasonOrCup}
            />
          ) : null}
          {seasonTrophy ? (
            <SeasonTrophies
              season={season}
              seasonTrophy={seasonTrophy}
              show={showSeasonOrCup}
            />
          ) : null}
          {!selectTropfy && !seasonTrophy ? <NoSelectMessage /> : null}
        </div>

        <TrophySide
          allTrophy={allTrophy}
          side={"rightside"}
          sideContainer={"trophy-rightside-container"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Trophies;

import { FC, useEffect, useState } from "react";
import { uniqSeason } from "../trophInfo/trophySeasons";
import { allTrophy } from "../trophInfo/TrophyInfo";
import { trophy } from "../../interface/interface";

interface SelectSeasonProps {
  showListSeason: boolean;
  seasonDate: (season: string) => void;
  setShowListSeason: (x: boolean) => void;
  getSeasonTrophy: (data: trophy[]) => void;
  setShowSeasonOrCup: (x: string) => void;
}

const SelectSeason: FC<SelectSeasonProps> = ({
  showListSeason,
  setShowListSeason,
  getSeasonTrophy,
  setShowSeasonOrCup,
  seasonDate,
}) => {
  const [season, setSeason] = useState<Array<string>>();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (!target.classList.contains("input-season-years"))
        setShowListSeason(false);
    });
  });

  function getListSeasons(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const availableSeason = uniqSeason(allTrophy);
    const currentSeason = availableSeason.filter((season) =>
      season.includes(inputValue)
    );
    if (currentSeason.length > 0) setShowListSeason(true);
    if (inputValue.length === 0) setShowListSeason(false);
    setSeason(currentSeason);
  }
  function getSeasonMatch(season: string) {
    seasonDate(season);
    const isTrophy = allTrophy.filter((trophy) => {
      return trophy.years.includes(season);
    });
    setShowListSeason(false);
    setShowSeasonOrCup("season");
    getSeasonTrophy(isTrophy);
  }

  return (
    <div className="select-years">
      <input
        className="input-season-years"
        onFocus={() => setShowListSeason(true)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getListSeasons(e);
        }}
        placeholder="Введите год сезона"
      />
      {showListSeason ? (
        <div className="season-list">
          {season?.map((el) => {
            return (
              <span
                key={el}
                className="season"
                onClick={() => getSeasonMatch(el)}
              >
                {el}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SelectSeason;

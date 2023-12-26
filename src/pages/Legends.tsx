import { useEffect, useState } from "react";
import Header from "../components/main-page/header/Header";
import "../components/legends/Legends.scss";
import Footer from "../components/UI/Footer";
import { legendPlayers } from "../components/legends/list-of-players/legends";
import { ILegends } from "../components/interface/interface";
import CardLegends from "../components/legends/CardLegends";
import LegendsDiscriptionContainer from "../components/legends/LegendsDiscriptionContainer";
import Modal from "../components/UI/Modal";
import FilterLegends from "../components/legends/FilterLegends";

const Legends = () => {
  const [legends, setLegends] = useState<ILegends[]>(legendPlayers);
  const [playerDiscription, setPlayerDiscription] = useState<ILegends>();
  const [hiddenModal, setHiddenModal] = useState<boolean>(true);

  function getIdPlayer(id: number) {
    const player = legends.find((player) => player.id === id);
    setPlayerDiscription(player);
    setHiddenModal(false);
  }
  function handlerModal(e: React.MouseEvent) {
    const target = e.target as Element;
    if (target.classList.contains("modal")) return setHiddenModal(true);
  }

  const sortListLegends = (
    sortDirection: string,
    children: React.ReactNode
  ) => {
    if (sortDirection === "больше" || sortDirection === "старше") {
      const increase = [...legends].sort((a, b) => {
        if (children === "Голы") return b.goals - a.goals;
        if (children === "Игры") return b.matchesPlayed - a.matchesPlayed;
        if (children === "Дата рождения") console.log(a);

        return a.yearsOfBirth - b.yearsOfBirth;
      });
      setLegends(increase);
    } else {
      const decrease = [...legends].sort((a, b) => {
        if (children === "Голы") return a.goals - b.goals;
        if (children === "Игры") return a.matchesPlayed - b.matchesPlayed;
        if (children === "Дата рождения") console.log(a.yearsOfBirth);
        console.log(b.yearsOfBirth);
        return b.yearsOfBirth - a.yearsOfBirth;
      });
      setLegends(decrease);
    }
  };

  useEffect(() => {
    const element = document.getElementsByClassName(
      "legend-discription-container"
    );
    element[0].scrollTop = 0;
  });
  return (
    <div>
      <Header />
      <div className="filter_block_dropdown-filter-container">
        <div className="dropdown-filter-container">
          <FilterLegends
            list={["больше", "меньше"]}
            sortListLegends={sortListLegends}
          >
            Голы
          </FilterLegends>
          <FilterLegends
            list={["больше", "меньше"]}
            sortListLegends={sortListLegends}
          >
            Игры
          </FilterLegends>
          <FilterLegends
            list={["старше", "младше"]}
            sortListLegends={sortListLegends}
          >
            Дата рождения
          </FilterLegends>
        </div>
      </div>

      <div className="legends-main-field-container">
        <CardLegends legends={legends} getId={getIdPlayer} />
        <Modal hiddenModal={hiddenModal} handlerModal={handlerModal}>
          <LegendsDiscriptionContainer playerDiscription={playerDiscription} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default Legends;

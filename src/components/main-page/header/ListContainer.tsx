import { FC, useState } from "react";
import listContent from "./list-menu/listContent";
import ListMenu from "./list-menu/ListMenu";

interface ListContainerProps {
  children: React.ReactNode;
}

const ListContainer: FC<ListContainerProps> = ({ children }) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [list, setList] = useState<{ listName: string; href: string }[]>([]);

  const showMenu = (): void => {
    if (children === "О клубе") {
      setList(listContent.aboutClub);
    }
    if (children === "Игроки") {
      setList(listContent.players);
    }
    if (children === "Матчи") {
      setList(listContent.matches);
    }
    setIsMenu(true);
  };
  const hiddenMenu = (): void => {
    setIsMenu(false);
  };

  return (
    <div>
      <div
        className="header-list-container"
        onMouseEnter={showMenu}
        onMouseLeave={hiddenMenu}
      >
        {children}
        {isMenu ? <ListMenu list={list} /> : null}
      </div>
    </div>
  );
};

export default ListContainer;

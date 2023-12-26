import { FC } from "react";

interface ListMenuProps {
  list: { listName: string; href: string }[];
}

const ListMenu: FC<ListMenuProps> = ({ list }) => {
  return (
    <div className="menu-lust">
      {list.map((el, index) => {
        return (
          <a key={index} href={el.href}>
            <li className="list-item">{el.listName}</li>
          </a>
        );
      })}
    </div>
  );
};

export default ListMenu;

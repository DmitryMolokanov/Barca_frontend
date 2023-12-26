import { FC, useState } from "react";

interface FilterLegendsProps {
  children: React.ReactNode;
  list: Array<string>;
  sortListLegends: (x: string, children: React.ReactNode) => void;
}

const FilterLegends: FC<FilterLegendsProps> = ({
  children,
  list,
  sortListLegends,
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div
      className="legend-filter-container"
      onMouseOver={() => setShowList(true)}
      onMouseOut={() => setShowList(false)}
    >
      <span className="legend-filter-title">{children}</span>
      <div
        className="legend-filter-list-container"
        style={showList ? { display: "block" } : { display: "none" }}
      >
        {list?.map((el, index) => (
          <ul key={index}>
            <li onClick={() => sortListLegends(el, children)}>{el}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FilterLegends;

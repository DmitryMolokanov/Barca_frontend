import { FC } from "react";

interface discriptionProps {
  birth: string | undefined;
  country: string | undefined;
  flag: string | undefined;
  teams:
    | {
        team: string;
        years: string;
      }[]
    | undefined;
  height: number | undefined;
  weight: number | undefined;
}

const DiscriptionCard: FC<discriptionProps> = ({
  birth,
  country,
  flag,
  teams,
  height,
  weight,
}) => {
  return (
    <table className="player-info-under">
      <tbody>
        <tr>
          <td>Дата рождения</td>
          <td>{birth}</td>
        </tr>
        <tr>
          <td>Гражданство</td>
          <td className="country">
            <span>{country}</span>
            <img src={flag} alt="flag" />
          </td>
        </tr>
        <tr>
          <td>Карьера</td>
          <td>
            {teams?.map((team, index) => {
              return (
                <div className="club-before-container" key={index}>
                  <span>{team.team}</span>
                  <span className="years">{team.years} </span>
                </div>
              );
            })}
          </td>
        </tr>
        <tr>
          <td>Рост</td>
          <td>{height} см</td>
        </tr>
        <tr>
          <td>Вес</td>
          <td>{weight} кг</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DiscriptionCard;

const ScoreThead = () => {
  return (
    <thead>
      <tr>
        <th>№</th>
        <th>Игрок</th>
        <th></th>
        <th>
          <div className="score-icons">
            <img src="\players\result-icons\apperance.png" alt="выход" />
          </div>
        </th>
        <th>
          <div className="score-icons">
            <img src="\players\result-icons\goal.png" alt="выход" />
          </div>
        </th>
        <th>
          <div className="score-icons">
            <img src="\players\result-icons\assist.png" alt="выход" />
          </div>
        </th>
        <th>И/Г</th>
      </tr>
    </thead>
  );
};

export default ScoreThead;

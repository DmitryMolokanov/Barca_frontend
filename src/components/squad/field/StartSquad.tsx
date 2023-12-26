import PlayerOnField from "./PlayerOnField";

const StartSquad = () => {
  return (
    <div className="field-container">
      <div className="field-img">
        <img src="field\field.png" alt="field" />
      </div>
      <div className="main-squad">
        <div className="players-line">
          <PlayerOnField>Félix</PlayerOnField>
          <PlayerOnField>Lewandowski</PlayerOnField>
          <PlayerOnField>Raphinha</PlayerOnField>
        </div>
        <div className="players-line">
          <PlayerOnField>de Jong</PlayerOnField>
          <PlayerOnField>Gündogan</PlayerOnField>
          <PlayerOnField>Pedri</PlayerOnField>
        </div>
        <div className="players-line">
          <PlayerOnField imgSize={65}>Cancelo</PlayerOnField>
          <PlayerOnField imgSize={65}>Martínez</PlayerOnField>
          <PlayerOnField imgSize={65}>Araújo</PlayerOnField>
          <PlayerOnField imgSize={65}>Koundé</PlayerOnField>
        </div>
        <div className="players-line">
          <PlayerOnField imgSize={15}>ter Stegen</PlayerOnField>
        </div>
      </div>
    </div>
  );
};

export default StartSquad;

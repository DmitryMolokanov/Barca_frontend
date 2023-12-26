import "./Header.scss";
import ListContainer from "./ListContainer";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-conteiner">
        <a href="/">
          <img className="logo" src="logo.png" alt="logo" />
        </a>
      </div>
      <div className="container-list-container">
        <ListContainer>О клубе</ListContainer>
        <ListContainer>Игроки</ListContainer>
        <ListContainer>Матчи</ListContainer>
      </div>
    </div>
  );
};

export default Header;

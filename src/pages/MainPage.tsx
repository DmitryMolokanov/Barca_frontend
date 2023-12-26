import Header from "../components/main-page/header/Header";
import FactsContainer from "../components/main-page/facts/FactsContainer";
import LastResults from "../components/main-page/lastResults/LastResults";
import Standings from "../components/main-page/standings/Standings";

const MainPage = () => {
  return (
    <div>
      <Header />
      <FactsContainer />
      <LastResults />
      <Standings />
    </div>
  );
};

export default MainPage;

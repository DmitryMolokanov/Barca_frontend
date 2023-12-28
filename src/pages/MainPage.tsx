import Header from "../components/main-page/header/Header";
import FactsContainer from "../components/main-page/facts/FactsContainer";
import LastResults from "../components/main-page/lastResults/LastResults";
import Standings from "../components/main-page/standings/Standings";
import Footer from "../components/UI/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <FactsContainer />
      <LastResults />
      <Standings />
      <Footer />
    </div>
  );
};

export default MainPage;

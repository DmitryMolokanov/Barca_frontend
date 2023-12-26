import "./FactsContainer.scss";
import interestingFacts from "../info/interestingFacts";
import { getRandomFacts } from "../info/getRandomFacts";

const FactsContainer = () => {
  const num = getRandomFacts(interestingFacts);
  return (
    <div className="facts-container">
      <div className="fact">
        <div className="facts-img">
          <div>
            <img
              src={interestingFacts[num].img}
              alt={interestingFacts[num].img}
            />
          </div>
        </div>
        <div className="fact-discription">
          <span>"{interestingFacts[num].discription}"</span>
        </div>
      </div>
    </div>
  );
};

export default FactsContainer;

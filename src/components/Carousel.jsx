import Card from "./Card";
import PropTypes from "prop-types";
import "./Carousel.css";
import { useState } from "react";
function Carousel({ characterList }) {
  const [strength, setStrenght] = useState("");
  const [charisma, setCharisma] = useState("");
  const [endurance, setEndurance] = useState("");

  return (
    <div className="carousel-container">
      {characterList.map((character) => {
        return (
          <div key={character.id} className="carousel-body">
            <Card src={character.src} alt={character.alt} />
            <div className="stregth-count">strength: {character.strength}</div>
            <div className="strength-counter-buttons">
              <button
                type="button"
                onClick={() => setStrenght((strength) => strength - 1)}
              >
                -
              </button>
              <p>{strength}</p>
              <button
                type="button"
                onClick={() => setStrenght((strength) => strength + 1)}
              >
                +
              </button>
            </div>
            <div className="charisma-count">charisma: {character.charisma}</div>
            <div className="charisma-counter-buttons">
              <button
                type="button"
                onClick={() => setCharisma((charisma) => charisma - 1)}
              >
                -
              </button>
              <p>{charisma}</p>
              <button
                type="button"
                onClick={() => setCharisma((charisma) => charisma + 1)}
              >
                +
              </button>
            </div>
            <div className="endurance-count">
              endurance: {character.endurance}
            </div>
            <div className="endurance-counter-buttons">
              <button
                type="button"
                onClick={() => setEndurance((endurance) => endurance - 1)}
              >
                -
              </button>
              <p>{endurance}</p>
              <button
                type="button"
                onClick={() => setEndurance((endurance) => endurance + 1)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
Carousel.propTypes = {
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      strength: PropTypes.number.isRequired,
      charisma: PropTypes.number.isRequired,
      endurance: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Carousel;

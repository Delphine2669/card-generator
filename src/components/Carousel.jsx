import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./Carousel.css";

function Carousel({ characterList }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [charisma, setCharisma] = useState("");
  const [strength, setStrength] = useState("");
  const [endurance, setEndurance] = useState("");

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="carousel-container">
      {characterList.map((character) => {
        const isSelected =
          selectedCharacter && selectedCharacter.id === character.id;
        return (
          <div
            key={character.id}
            className={`carousel-body ${isSelected ? "selected" : ""}`}
            onClick={() => selectCharacter(character)}
          >
            <Card
              src={character.src}
              alt={character.alt}
              className="carousel-card"
            />
            <div>
              {isSelected && (
                <div>
                  <div className="strength-count">
                    strength: {character.strength}
                  </div>
                  <div className="strength-counter-buttons">
                    <button
                      type="button"
                      onClick={() => setStrength((strength) => strength - 1)}
                    >
                      -
                    </button>
                    <p>{strength}</p>
                    <button
                      type="button"
                      onClick={() =>
                        setStrength((strength) => character.strength + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="charisma-count">
                    charisma: {character.charisma}
                  </div>
                  <div className="charisma-counter-buttons">
                    <button
                      type="button"
                      onClick={() =>
                        setCharisma((charisma) => character.charisma - 1)
                      }
                    >
                      -
                    </button>
                    <p>{charisma}</p>
                    <button
                      type="button"
                      onClick={() =>
                        setCharisma((charisma) => character.charisma + 1)
                      }
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
                      onClick={() =>
                        setEndurance((endurance) => character.endurance - 1)
                      }
                    >
                      -
                    </button>
                    <p>{endurance}</p>
                    <button
                      type="button"
                      onClick={() =>
                        setEndurance((endurance) => character.endurance + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
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

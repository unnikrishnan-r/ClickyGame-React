import React from "react";
import Title from "./Title";
import CharacterCard from "./CharacterCard";
import characters from "./../characters.json";
import "./wrapperstyle.css";


class ClickGameContainer extends React.Component {
  state = {
    clickedImages: [],
    currentScore: 0,
    totalScore: 0,
    messageAtClick: "Click an image to begin!!"
  };
  handleImageClick(clickedImageId) {
    this.keepScore(
      this.isCorrectGuess(clickedImageId, this.state.clickedImages),
      clickedImageId,
      this.state
    );
  }

  keepScore(correctGuess, clickedImageId, currentState) {
    if (correctGuess) {
      console.log("Correct Guess");
      currentState.clickedImages.push(clickedImageId);

      this.setState({
        currentScore: currentState.currentScore + 1,
        messageAtClick: "You guessed correctly!",
        clickedImages: currentState.clickedImages
      });
    } else {
      console.log("Incorrect Guess");
      this.setState({
        totalScore:
          currentState.currentScore > currentState.totalScore
            ? currentState.currentScore
            : currentState.totalScore,
        currentScore: 0,
        messageAtClick: "You guessed incorrectly!",
        clickedImages: []
      });
    }
  }

  isCorrectGuess(currentChoice, playerArray) {
    const guess = playerArray.filter(player => player === currentChoice);
    return guess.length === 0 ? true : false;
  }

  render() {
    return (
      <div>
        <Title {...this.state} />
        <div className="wrapper">
          {characters.sort(() => Math.random() - 0.5).map(char => {
            return (
              <CharacterCard
                value={char}
                onClick={() => this.handleImageClick(char.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ClickGameContainer;

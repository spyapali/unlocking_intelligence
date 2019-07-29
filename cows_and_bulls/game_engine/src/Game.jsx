import React, { Component } from "react";
import WordBar from "./WordBar";

const WORD = "lake";

class Game extends Component {
  state = {
    gameEnded: false,
    guess: "",
    originalWord: WORD
  };

  handleGuess = newGuess => {
    this.setState({ guess: newGuess });
  };

  addCharsToSet = () => {
    let chars = new Set();
    for (let char of this.state.originalWord) {
      console.log(char);
      chars.add(char);
    }
    return chars;
  };

  revealCowsandBulls = () => {
    const chars = this.addCharsToSet();
    let charsSeenSoFar = new Set();
    let bulls = 0,
      cows = 0;
    for (let index = 0; index < this.state.guess.length; index++) {
      let currentChar = this.state.guess[index];
      if (currentChar === this.state.originalWord[index]) {
        bulls++;
      } else if (!charsSeenSoFar.has(currentChar) && chars.has(currentChar)) {
        cows++;
      }
    }
    return (
      <div>
        <h1>Cows: {cows}</h1>
        <h1>Bulls: {bulls}</h1>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Please enter a four character word below</h1>
        <WordBar onGuess={this.handleGuess} />
        <h1>{this.revealCowsandBulls()}</h1>
      </div>
    );
  }
}

export default Game;

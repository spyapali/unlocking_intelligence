import React, { Component } from "react";
import WordBar from "./WordBar";

// const WORDS = [
//   "bait",
//   "fate",
//   "late",
//   "sake",
//   "fake",
//   "wake",
//   "rake",
//   "lake",
//   "wait"
// ];

class Game extends Component {
  state = {
    gameEnded: false,
    guess: ""
  };

  handleGuess = newGuess => {
    console.log("anything?");
    this.setState({ guess: newGuess });
  };

  render() {
    return (
      <div>
        <h1>Please enter a word below</h1>
        <WordBar onGuess={this.handleGuess} />
        <h1>{this.state.guess}</h1>
      </div>
    );
  }
}

export default Game;

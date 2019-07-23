import React, { Component } from "react";
import WordBar from "./WordBar";

const WORDS = [
  "bait",
  "fate",
  "late",
  "sake",
  "fake",
  "wake",
  "rake",
  "lake",
  "wait"
];

function chooseOriginalWord() {
  /* Chooses a random index and selects a word at that index from the WORDS array */
  const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  return randomWord;
}

const ORIGINALWORD = chooseOriginalWord();

class Game extends Component {
  state = {
    hasGameEnded: false,
    guess: "",
    originalWord: ORIGINALWORD
  };
  render() {
    return (
      <div>
        <h1>Please enter a word below</h1>
        <h2>Here's the original word: {this.state.originalWord}</h2>
        <WordBar />
      </div>
    );
  }
}

export default Game;

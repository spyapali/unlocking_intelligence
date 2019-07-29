import React, { Component } from "react";
import PropTypes from "prop-types";
import PinInput from "react-pin-input";

class WordBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ""
    };
  }

  static propTypes = {
    onGuess: PropTypes.func.isRequired
  };

  onComplete = event => {
    this.props.onGuess(this.state.word);
  };

  onChange = value => {
    this.setState({ word: value });
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <PinInput
          length={4}
          initialValue=""
          onChange={value => {
            this.onChange(value);
          }}
          type="text"
          style={{ padding: "10px" }}
          inputStyle={{ borderColor: "black" }}
          inputFocusStyle={{ borderColor: "blue" }}
          onComplete={value => {
            this.onComplete(value);
          }}
        />
      </nav>
    );
  }
}

export default WordBar;

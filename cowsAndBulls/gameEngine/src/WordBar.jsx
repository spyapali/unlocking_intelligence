import React, { Component } from "react";
import PropTypes from "prop-types";
import PinInput from "react-pin-input";

class WordBar extends Component {
  static propTypes = {
    onGuess: PropTypes.func.isRequired
  };

  onChange = value => {
    this.props.onGuess(value);
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
          onComplete={() => {
            this.props.onTry();
          }}
          type="text"
          style={{ padding: "10px" }}
          inputStyle={{ borderColor: "black" }}
          inputFocusStyle={{ borderColor: "blue" }}
        />
      </nav>
    );
  }
}

export default WordBar;

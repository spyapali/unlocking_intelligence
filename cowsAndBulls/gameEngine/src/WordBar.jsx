import React, { Component } from "react";
import PropTypes from "prop-types";
import PinInput from "react-pin-input";
import { TextField } from '@material-ui/core';

class WordBar extends Component {
  static propTypes = {
    onGuess: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired
  };

  onChange = value => {
    this.props.onGuess(value);
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <TextField
          inputProps={{'maxLength': '1'}}
          onChange={value => {
            this.onChange(value);
          }}
          size="normal"
          style={{width: 20}}
        />
      </nav>
    );
  }
}

export default WordBar;

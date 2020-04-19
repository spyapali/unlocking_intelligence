import React, { Component } from "react";
import PropTypes from "prop-types";
import PinInput from "react-pin-input";
import { TextField } from '@material-ui/core';

class CharacterSpace extends Component {
  static propTypes = {
    onGuess: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired
  };

  onChange = event => {
    this.props.onGuess(event.target.value, this.props.index);
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <TextField
          inputProps={{'maxLength': '1'}}
          onChange={this.onChange}
          size="normal"
          style={{width: 20}}
        />
      </nav>
    );
  }
}

export default CharacterSpace;

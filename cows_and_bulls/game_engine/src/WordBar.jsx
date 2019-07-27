import React, { Component } from "react";
import PropTypes from "prop-types";

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

  onSubmit = event => {
    this.props.onGuess(this.state.word);
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ word: event.target.value });
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="ex: word"
            aria-label="word"
            onChange={this.onChange}
          />
          <input
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            value="Enter"
          />
        </form>
      </nav>
    );
  }
}

export default WordBar;

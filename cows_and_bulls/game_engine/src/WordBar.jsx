import React, { Component } from "react";

class WordBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <form
          class="form-inline"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="ex: word"
            aria-label="word"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Enter
          </button>
        </form>
      </nav>
    );
  }
}

export default WordBar;

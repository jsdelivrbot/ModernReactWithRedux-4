import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favourite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

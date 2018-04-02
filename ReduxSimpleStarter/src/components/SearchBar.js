import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { term: "Hello" };
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({ term: inputValue });
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;

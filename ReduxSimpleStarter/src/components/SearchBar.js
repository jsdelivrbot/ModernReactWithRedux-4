import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
    return <input onChange={this.handleInputChange} />;
  }
  
  handleInputChange(event) {

  }
}

export default SearchBar;

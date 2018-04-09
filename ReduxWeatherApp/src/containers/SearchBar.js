import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/";

class SearchBar extends Component {
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
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWeather: term => {
      dispatch(fetchWeather(term));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);

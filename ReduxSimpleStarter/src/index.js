import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import YTSearch from "youtube-api-search";

const API_KEY = "Placeholder for the Google Youtube API key.";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
      // === this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

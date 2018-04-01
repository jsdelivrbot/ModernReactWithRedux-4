import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";

const API_KEY = "Placeholder for the Google Youtube API key.";

YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector(".container"));

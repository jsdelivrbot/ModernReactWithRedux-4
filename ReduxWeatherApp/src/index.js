import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import App from "./components/app";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
import WeatherList from "./containers/WeatherList";

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise, ReduxThunk))(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
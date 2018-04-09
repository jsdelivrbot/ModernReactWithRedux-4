import { API_URL } from "../constants/API";
import axios from "axios";
import { FETCH_WEATHER } from "../constants/ActionTypes";

const fetchWeather = city => {
  const completeUrl = `${API_URL}&q=${city},au`;
  const request = axios.get(completeUrl);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export { fetchWeather };

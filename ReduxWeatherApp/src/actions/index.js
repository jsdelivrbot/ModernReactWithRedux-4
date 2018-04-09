import { API_URL } from "../constants/API";
import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  const completeUrl = `${API_URL}&q=${city},au`;
  const request = axios.get(completeUrl);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

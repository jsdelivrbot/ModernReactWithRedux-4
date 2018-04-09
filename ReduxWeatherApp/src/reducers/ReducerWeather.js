import FETCH_WEATHER from "../constants/ActionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_WEATHER":
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
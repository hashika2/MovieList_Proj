import { Types } from "../types";

const initialesState = {
  data: null,
  isAdded: false,
  isRemoved: false,
};

export default function (state = initialesState, action) {
  switch (action.type) {
    case Types.MOVIE_ADDED:
      return {
        ...state,
        data: action.payload,
        isAdded: true,
      };
    case Types.MOVIE_REMOVED:
      return {
        ...state,
        data: action.payload,
        isRemoved: true,
      };
    default:
      return state;
  }
}

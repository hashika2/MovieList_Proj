const initialesState = {
  data: null,
  isAdded: false,
  isRemoved: false,
};

export default function (state = initialesState, action) {
  switch (action.type) {
    case "MOVIE_ADDED":
      return {
        ...state,
        data: action.payload,
        isAdded: true,
      };
    case "MOVIE_REMOVED":
      return {
        ...state,
        data: action.payload,
        isRemoved: true,
      };
    default:
      return state;
  }
}

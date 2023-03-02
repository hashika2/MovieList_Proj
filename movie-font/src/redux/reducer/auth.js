const initialesState = {
  data: null,
  isAuthenticated: false,
};

export default function (state = initialesState, action) {
  switch (action.type) {
    case "USER_REGISTERED":
    case "USER_LOGGED":
      return {
        ...state,
        token: action.payload.accessToken,
        data: action.payload,
        isAuthenticated: true,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

import { Types } from "../types";

const initialesState = {
  data: null,
  isAuthenticated: false,
  isRegistered: false,
};

export default function (state = initialesState, action) {
  switch (action.type) {
    case Types.USER_LOGGED:
      return {
        ...state,
        token: action.payload.accessToken,
        data: action.payload,
        isAuthenticated: true,
        isRegistered: true,
      };
    case Types.USER_REGISTERED:
      return {
        ...state,
        data: action.payload,
        isRegistered: true,
      };
    case Types.LOGIN_FAIL:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

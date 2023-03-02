export const loginUser = (userObj) => {
  return {
    type: "USER_LOGGED",
    payload: userObj,
  };
};

export const registerUser = (userObj) => {
  return {
    type: "USER_REGISTERED",
    payload: userObj,
  };
};

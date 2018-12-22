const SET_AUTH_USER = "SET_AUTH_USER";

const setAuthUser = payload => {
  return {
    type: SET_AUTH_USER,
    payload
  };
};

export {
  SET_AUTH_USER,
  setAuthUser,
};

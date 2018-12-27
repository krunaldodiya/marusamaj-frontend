const RESET_GUEST_USER = "RESET_GUEST_USER";
const GET_GUEST_USER = "GET_GUEST_USER";
const GET_GUEST_USER_SUCCESS = "GET_GUEST_USER_SUCCESS";
const GET_GUEST_USER_FAIL = "GET_GUEST_USER_FAIL";

const resetGuestUser = payload => {
  return {
    type: RESET_GUEST_USER,
    payload
  };
};

const getGuestUser = payload => {
  return {
    type: GET_GUEST_USER,
    payload
  };
};

const getGuestUserSuccess = payload => {
  return {
    type: GET_GUEST_USER_SUCCESS,
    payload
  };
};

const getGuestUserFail = payload => {
  return {
    type: GET_GUEST_USER_FAIL,
    payload
  };
};

export {
  RESET_GUEST_USER,
  GET_GUEST_USER,
  GET_GUEST_USER_SUCCESS,
  GET_GUEST_USER_FAIL,
  resetGuestUser,
  getGuestUser,
  getGuestUserSuccess,
  getGuestUserFail
};

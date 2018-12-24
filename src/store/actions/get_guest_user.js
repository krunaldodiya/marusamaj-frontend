const GET_GUEST_USER = "GET_GUEST_USER";
const GET_GUEST_USER_SUCCESS = "GET_GUEST_USER_SUCCESS";
const GET_GUEST_USER_FAIL = "GET_GUEST_USER_FAIL";

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
  GET_GUEST_USER,
  GET_GUEST_USER_SUCCESS,
  GET_GUEST_USER_FAIL,
  getGuestUser,
  getGuestUserSuccess,
  getGuestUserFail
};

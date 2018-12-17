const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
const UPDATE_USER_PROFILE_FAIL = "UPDATE_USER_PROFILE_FAIL";
const SET_AUTH_USER = "SET_AUTH_USER";

const updateUserProfile = payload => {
  return {
    type: UPDATE_USER_PROFILE,
    payload
  };
};

const updateUserProfileSuccess = payload => {
  return {
    type: UPDATE_USER_PROFILE_SUCCESS,
    payload
  };
};

const updateUserProfileFail = payload => {
  return {
    type: UPDATE_USER_PROFILE_FAIL,
    payload
  };
};

const setAuthUser = payload => {
  return {
    type: SET_AUTH_USER,
    payload
  };
};

export {
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  SET_AUTH_USER,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFail,
  setAuthUser
};

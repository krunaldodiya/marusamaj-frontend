const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
const UPDATE_USER_PROFILE_FAIL = "UPDATE_USER_PROFILE_FAIL";

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

export {
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFail
};

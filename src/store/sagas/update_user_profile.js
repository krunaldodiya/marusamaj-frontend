import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import {
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS
} from "../actions/update_user_profile";

function* updateUserProfile(action) {
  const { authUser, navigation, screen } = action.payload;

  try {
    const { data } = yield call(makeRequest, api.updateUserProfile, authUser);
    const { user } = data;

    yield put({
      type: UPDATE_USER_PROFILE_SUCCESS,
      payload: { authUser: user }
    });

    navigation.replace(screen, { user: data.user });
  } catch (error) {    
    yield put({
      type: UPDATE_USER_PROFILE_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* updateUserProfileWatcher() {
  yield takeEvery(UPDATE_USER_PROFILE, updateUserProfile);
}

export { updateUserProfileWatcher };

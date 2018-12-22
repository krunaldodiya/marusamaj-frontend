import { call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../services";
import {
  SET_AUTH_USER,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS
} from "../actions";

function* updateUserProfile(action) {
  const { authUser, navigation, screen, url } = action.payload;

  yield put({
    type: SET_AUTH_USER,
    payload: { authUser }
  });

  try {
    const { data } = yield call(makeRequest, url, authUser);
    const { user } = data;

    yield put({
      type: UPDATE_USER_PROFILE_SUCCESS,
      payload: { authUser: user }
    });

    navigation.replace(screen, { user });
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

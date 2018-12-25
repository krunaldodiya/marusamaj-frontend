import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import {
  GET_GUEST_USER,
  GET_GUEST_USER_FAIL,
  GET_GUEST_USER_SUCCESS
} from "../actions";

function* getGuestUser(action) {
  try {
    const { data } = yield call(makeRequest, api.getUserById, {
      user_id: action.payload.user_id
    });

    const { user } = data;

    yield put({
      type: GET_GUEST_USER_SUCCESS,
      payload: { guestUser: user }
    });
  } catch (error) {
    yield put({
      type: GET_GUEST_USER_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* getGuestUserWatcher() {
  yield takeEvery(GET_GUEST_USER, getGuestUser);
}

export { getGuestUserWatcher };

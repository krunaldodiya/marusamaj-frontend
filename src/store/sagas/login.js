import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest, setAuthToken } from "../../services";
import {
  GET_AUTH_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "../actions";

function* login(action) {
  const { username, password } = action.payload;

  try {
    const { data } = yield call(makeRequest, api.login, {
      username,
      password
    });

    const { user, token } = data;

    yield call(setAuthToken, token);

    yield put({ type: LOGIN_SUCCESS });

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: { authUser: user }
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* loginWatcher() {
  yield takeEvery(LOGIN, login);
}

export { loginWatcher };

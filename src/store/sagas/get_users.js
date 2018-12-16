import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "../actions/get_users";

import { api } from "../../libs/api";
import { makeRequest } from "../../services";

function* getUsers() {
  try {
    const { data } = yield call(makeRequest, api.getUsers, {});
    const { users } = data;

    yield put({
      type: GET_USERS_SUCCESS,
      payload: { users: users }
    });
  } catch (error) {
    yield put({
      type: GET_USERS_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* getUsersWatcher() {
  yield takeEvery(GET_USERS, getUsers);
}

export { getUsersWatcher };

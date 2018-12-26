import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest, setAuthToken } from "../../services";
import {
  GET_AUTH_USER_SUCCESS,
  SWITCH_ACCOUNT,
  SWITCH_ACCOUNT_FAIL,
  SWITCH_ACCOUNT_SUCCESS
} from "../actions";

function* switchAccount(action) {  
  const { user_id, navigation } = action.payload;

  try {
    const { data } = yield call(makeRequest, api.authLogin, { user_id });

    const { user, token } = data;

    yield call(setAuthToken, token);

    yield put({ type: SWITCH_ACCOUNT_SUCCESS });

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: { authUser: user }
    });

    navigation.replace(getInitialScreen(user));
  } catch (error) {
    yield put({
      type: SWITCH_ACCOUNT_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* switchAccountWatcher() {
  yield takeEvery(SWITCH_ACCOUNT, switchAccount);
}

export { switchAccountWatcher };

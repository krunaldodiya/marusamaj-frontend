import { call, put, takeEvery } from "redux-saga/effects";
import { getInitialScreen } from "../../libs/screen";
import { resetAuthToken } from "../../services";
import { GET_AUTH_USER_SUCCESS, LOGOUT, TOGGLE_DRAWER } from "../actions";

function* logout(action) {
  const { navigation } = action.payload;

  yield put({ type: TOGGLE_DRAWER, payload: { isOpen: false } });

  yield call(resetAuthToken);

  yield put({
    type: GET_AUTH_USER_SUCCESS,
    payload: { authUser: null }
  });

  navigation.replace(getInitialScreen(null));
}

function* logoutWatcher() {
  yield takeEvery(LOGOUT, logout);
}

export { logoutWatcher };


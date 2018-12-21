import { call, put, takeEvery } from "redux-saga/effects";
import { resetAuthToken } from "../../services";
import { LOGOUT, TOGGLE_DRAWER } from "../actions";

function* logout(action) {
  const { navigation } = action.payload;

  yield put({ type: TOGGLE_DRAWER, payload: { isOpen: false } });

  yield call(resetAuthToken);

  navigation.replace("LoginScreen");
}

function* logoutWatcher() {
  yield takeEvery(LOGOUT, logout);
}

export { logoutWatcher };


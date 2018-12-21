import { call, takeEvery } from "redux-saga/effects";
import { resetAuthToken } from "../../services";
import { LOGOUT } from "../actions";

function* logout(action) {
  const { navigation } = action.payload;

  yield call(resetAuthToken);

  navigation.replace("LoginScreen");
}

function* logoutWatcher() {
  yield takeEvery(LOGOUT, logout);
}

export { logoutWatcher };


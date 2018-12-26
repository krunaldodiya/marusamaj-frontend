import { call, put, takeEvery } from "redux-saga/effects";
import { getInitialScreen } from "../../libs/screen";
import { resetAuthToken } from "../../services";
import { GET_AUTH_USER_SUCCESS, LOGOUT } from "../actions";

function* logout(action) {
  const { navigation } = action.payload;

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


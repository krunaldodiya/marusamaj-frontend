import { put, select, takeEvery } from "redux-saga/effects";
import { getAuthUser, getCastes, NETWORK_STATE_CHANGE } from "../actions";

function* networkStateChange() {
  const { auth, network } = yield select(state => state);

  yield put(getCastes());

  if (network.connection.type !== "none" && auth.user == null) {
    yield put(getAuthUser());
  }
}

function* handleNetworkWatcher() {
  yield takeEvery(NETWORK_STATE_CHANGE, networkStateChange);
}

export { handleNetworkWatcher };

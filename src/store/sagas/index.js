import { all } from "redux-saga/effects";
import { getAuthUserWatcher } from "./get_auth_user";
import { getCastesWatcher } from "./get_castes";
import { handleNetworkWatcher } from "./handle_network";
import { requestOtpWatcher } from "./request_otp";
import { updateUserProfileWatcher } from "./update_user_profile";
import { verifyOtpWatcher } from "./verify_otp";

function* rootSaga() {
  yield all([
    getAuthUserWatcher(),
    handleNetworkWatcher(),
    requestOtpWatcher(),
    verifyOtpWatcher(),
    getCastesWatcher(),
    updateUserProfileWatcher()
  ]);
}

export { rootSaga };


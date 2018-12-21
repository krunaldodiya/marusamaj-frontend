import { all } from "redux-saga/effects";
import { getAuthUserWatcher } from "./get_auth_user";
import { getCastesWatcher } from "./get_castes";
import { getUsersWatcher } from "./get_users";
import { handleNetworkWatcher } from "./handle_network";
import { loginWatcher } from "./login";
import { logoutWatcher } from "./logout";
import { registerWatcher } from "./register";
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
    updateUserProfileWatcher(),
    getUsersWatcher(),
    loginWatcher(),
    registerWatcher(),
    logoutWatcher()
  ]);
}

export { rootSaga };


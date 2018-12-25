import { all } from "redux-saga/effects";
import { addRelationWatcher } from "./add_relation";
import { getAuthUserWatcher } from "./get_auth_user";
import { getCastesWatcher } from "./get_castes";
import { getGuestUserWatcher } from "./get_guest_user";
import { getUsersWatcher } from "./get_users";
import { handleNetworkWatcher } from "./handle_network";
import { loginWatcher } from "./login";
import { logoutWatcher } from "./logout";
import { registerWatcher } from "./register";
import { requestOtpWatcher } from "./request_otp";
import { updateAuthUserWatcher } from "./update_auth_user";
import { verifyOtpWatcher } from "./verify_otp";

function* rootSaga() {
  yield all([
    getAuthUserWatcher(),
    handleNetworkWatcher(),
    requestOtpWatcher(),
    verifyOtpWatcher(),
    getCastesWatcher(),
    updateAuthUserWatcher(),
    getUsersWatcher(),
    loginWatcher(),
    registerWatcher(),
    logoutWatcher(),
    addRelationWatcher(),
    getGuestUserWatcher()
  ]);
}

export { rootSaga };


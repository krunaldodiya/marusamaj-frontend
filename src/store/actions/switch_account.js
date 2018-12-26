const SWITCH_ACCOUNT = "SWITCH_ACCOUNT";
const SWITCH_ACCOUNT_SUCCESS = "SWITCH_ACCOUNT_SUCCESS";
const SWITCH_ACCOUNT_FAIL = "SWITCH_ACCOUNT_FAIL";

const switchAccount = payload => {
  return {
    type: SWITCH_ACCOUNT,
    payload
  };
};

const switchAccountSuccess = payload => {
  return {
    type: SWITCH_ACCOUNT_SUCCESS,
    payload
  };
};

const switchAccountFail = payload => {
  return {
    type: SWITCH_ACCOUNT_FAIL,
    payload
  };
};

export {
  SWITCH_ACCOUNT,
  SWITCH_ACCOUNT_SUCCESS,
  SWITCH_ACCOUNT_FAIL,
  switchAccount,
  switchAccountSuccess,
  switchAccountFail
};

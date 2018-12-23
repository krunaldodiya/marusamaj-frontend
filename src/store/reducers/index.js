import { combineReducers } from "redux";
import auth from "./auth";
import castes from "./castes";
import drawer from "./drawer";
import guest from "./guest";
import init from "./init";
import network from "./network";
import otp from "./otp";
import users from "./users";

const rootReducer = combineReducers({
  auth,
  castes,
  drawer,
  guest,
  init,
  network,
  otp,
  users
});

export { rootReducer };


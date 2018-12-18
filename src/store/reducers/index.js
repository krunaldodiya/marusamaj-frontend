import { combineReducers } from "redux";
import auth from "./auth";
import castes from "./castes";
import drawer from "./drawer";
import guest from "./guest";
import network from "./network";
import users from "./users";

const rootReducer = combineReducers({
  auth,
  castes,
  drawer,
  guest,
  network,
  users
});

export { rootReducer };

import { combineReducers } from "redux";
import auth from "./auth";
import castes from "./castes";
import guest from "./guest";
import network from "./network";
import users from "./users";

const rootReducer = combineReducers({
  guest,
  auth,
  network,
  castes,
  users,
});

export { rootReducer };


import { combineReducers } from "redux";
import auth from "./auth";
import castes from "./castes";
import guest from "./guest";
import network from "./network";

const rootReducer = combineReducers({
  guest,
  auth,
  network,
  castes,
});

export { rootReducer };


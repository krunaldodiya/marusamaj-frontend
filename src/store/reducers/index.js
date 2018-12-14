import { combineReducers } from "redux";
import auth from "./auth";
import castes from "./castes";
import drawer from "./drawer";
import guest from "./guest";
import network from "./network";

const rootReducer = combineReducers({
  guest,
  auth,
  network,
  drawer,
  castes,
});

export { rootReducer };


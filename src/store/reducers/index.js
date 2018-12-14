import { combineReducers } from "redux";
import auth from "./auth";
import drawer from "./drawer";
import guest from "./guest";
import network from "./network";
import quiz from "./quiz";

const rootReducer = combineReducers({
  guest,
  auth,
  network,
  drawer,
  quiz
});

export { rootReducer };


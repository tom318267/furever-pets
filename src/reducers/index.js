import { combineReducers } from "redux";
import { petReducer } from "./petReducer";

export default combineReducers({
  pets: petReducer,
});

import { combineReducers } from "redux";
import { registrationDataReducer } from "./addUser/addUserReducer";

export const rootReducer = combineReducers({
  registrationData: registrationDataReducer,
});

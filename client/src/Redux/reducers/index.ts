import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
const reducers = combineReducers({
  getAllUsers: usersReducer,
});
export default reducers;
import { combineReducers } from "redux";
import counterReducer from "./reducers/CounterReducer";
import todoReducer from "./reducers/TodoReducer";
import usersReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
  users: usersReducer
});

export default rootReducer;

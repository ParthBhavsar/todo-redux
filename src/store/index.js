import { combineReducers } from "redux";
import counterReducer from "./reducers/CounterReducer";
import todoReducer from "./reducers/TodoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer
});

export default rootReducer;

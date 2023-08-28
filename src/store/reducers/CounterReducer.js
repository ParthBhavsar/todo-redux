import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../actions/CounterActions";

const initalState = {
  count: 0,
  fullName: ""
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: action.payload.count
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - action.payload.step
      };
    case RESET_COUNTER:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counter;

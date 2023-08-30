import { ERROR_USERS, FULFILLED_USERS, PENDING_USERS } from "../actions/UserActions";


const initalState = {
  results: [],
  status: "INIT"
};

const users = (state = initalState, action) => {
  switch (action.type) {
    case PENDING_USERS:
      return {
        ...state,
        status: 'PENDING',
        results: []
      };
    case FULFILLED_USERS:{
      console.log(action)
      return {
        ...state,
        status: 'FULFILLED',
        results: action.payload.results
      };}
    case ERROR_USERS:
      return {
        ...state,
        status: 'ERROR'
      };
    default:
      return state;
  }
};

export default users;

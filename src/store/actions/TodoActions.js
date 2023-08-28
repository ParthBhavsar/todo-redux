export const ADD_TODO = "ADD_TODO";
export const CLEAR_TODO_LIST = "CLEAR_TODO_LIST";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETED_TODO_ITEM = "COMPLETED_TODO_ITEM";

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const completedTodo = id => {
  return {
    type: COMPLETED_TODO_ITEM,
    id
  };
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/TodoActions";

const TodoInput= () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const onClickAddTodo = () => {
    if (inputValue.length <= 0) { return }
    dispatch(addTodo(inputValue));
    setInputValue("");
  }

  return (
    <div>
      <label htmlFor="todo-input">Enter Todo Here</label>
      <input
        id="todo-input"
        value={inputValue}
        onChange={event => setInputValue(event.currentTarget.value)}
        />
      <button onClick={onClickAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;

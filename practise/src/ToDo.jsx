import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/toDoSlice";

const ToDo = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("please enter a task before adding!");
    } else {
      dispatch(addTodo(input));
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default ToDo;

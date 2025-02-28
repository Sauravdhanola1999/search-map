import { createSlice, nanoid } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: 1,
        text: "Hello World",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((u) => u.id !== action.payload);
    },
  },
});


export const { addTodo, removeTodo, editTodo } = toDoSlice.actions;

export default toDoSlice.reducer;

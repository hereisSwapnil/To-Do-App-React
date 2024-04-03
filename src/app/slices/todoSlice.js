import { createSlice } from "@reduxjs/toolkit";

const storedTodos = JSON.parse(localStorage.getItem("todos"));
const initialState = storedTodos ? storedTodos : [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      state.splice(0, state.length, ...filteredTodos);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
      state.splice(0, state.length, ...updatedTodos);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      state.splice(0, state.length, ...updatedTodos);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;

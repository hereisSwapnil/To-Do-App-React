import { createSlice } from "@reduxjs/toolkit";

// Check if there are todos in localStorage
const storedTodos = JSON.parse(localStorage.getItem("todos"));
// It defines the initial state of the slice
const initialState = storedTodos ? storedTodos : [];

// The todoSlice will contain the addTodo, deleteTodo, editTodo, and toggleComplete reducers
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //   The addTodo reducer will add a new todo item to the state
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    //   The deleteTodo reducer will remove a todo item from the state
    deleteTodo: (state, action) => {
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      state.splice(0, state.length, ...filteredTodos);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    //  The editTodo reducer will update the text of a todo item
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
    //  The toggleComplete reducer will toggle the completed status of a todo item
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

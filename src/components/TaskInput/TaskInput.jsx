import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/slices/todoSlice";

// This component will display the input field for adding a new todo item.
export const TaskInput = () => {
  // The todoText state will store the text input value.
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  // The handleAddTodo function will dispatch the addTodo action with the new todo item's text.
  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(
        addTodo({
          id: Math.random().toString(36).substr(2, 9),
          text: todoText,
          completed: false,
        })
      );
      setTodoText("");
    }
  };
  return (
    <div className="listContainer">
      <h1 className="header">Todo App</h1>
      <div className="input">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};

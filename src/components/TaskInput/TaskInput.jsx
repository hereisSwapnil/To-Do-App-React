import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/slices/todoSlice";

export const TaskInput = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

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

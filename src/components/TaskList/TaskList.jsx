import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./TaskList.css";
import { ListItem } from "../ListItem/ListItem";

// This component will display a list of todo items.
export const TaskList = () => {
  // The todos state will store the list of todo items.
  const todos = useSelector((state) => state.todo);

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./TaskList.css";
import { ListItem } from "../ListItem/ListItem";

export const TaskList = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

import React from "react";
import { TaskInput } from "../components/TaskInput/TaskInput";
import { TaskList } from "../components/TaskList/TaskList";

// This page will be displayed as the main page of the application.
export const TodoPage = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

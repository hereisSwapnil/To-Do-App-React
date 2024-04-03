import React from "react";
import { TaskInput } from "../components/TaskInput/TaskInput";
import { TaskList } from "../components/TaskList/TaskList";

export const TodoPage = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

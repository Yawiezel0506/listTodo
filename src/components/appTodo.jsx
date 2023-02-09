import React from "react";
import TaskInput from "./taskInput";
import TaskList from "./taskList";

export default function AppTodo() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">YSW to do list</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

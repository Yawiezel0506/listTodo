import React from "react";
import TaskItem from "./taskItem";

export default function TaskList(props) {
  let tasksAr = props.tasksAr;
  let removeSingleTask = props.removeSingleTask;

  return (
    <div>
      <h2>Tasks list:</h2>
      {tasksAr.map((task) => {
        return <TaskItem key={task.id} task={task} removeSingleTask = {removeSingleTask}/>;
      })}
    </div>
  );
}

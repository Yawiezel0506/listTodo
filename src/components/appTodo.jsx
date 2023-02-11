import React, { useState } from "react";
import {sortBy} from 'lodash';

import TaskInput from "./taskInput";
import TaskList from "./taskList";


import './appTodo.css';

export default function AppTodo() {

    let [tasksAr, setTasksAr] = useState([])

    const addTaskToArray =(_task)=> {
        let sortAr = [...tasksAr, _task];
        sortAr = sortBy(sortAr, 'time');
        setTasksAr(sortAr);
        console.log(tasksAr);
    }

    const removeAllTasks =(_ar)=> {
        setTasksAr([]);
    }

    const removeSingleTask =(_id)=> {
        let tempAr = tasksAr.filter(task => task.id !== _id);
        setTasksAr(tempAr);
    }


  return (
    <div className="container main" style={{backgroundImage:"url(images/bg.jpg)"}}>
      <h1 className="display-4 text-center">YSW to do list</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput addTask = {addTaskToArray} removeAllTasks = {removeAllTasks}/>
        <TaskList tasksAr = {tasksAr} removeSingleTask={removeSingleTask}/>
      </div>
    </div>
  );
}

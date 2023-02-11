import React, { useEffect, useState } from "react";
import {sortBy} from 'lodash';

import TaskInput from "./taskInput";
import TaskList from "./taskList";


import './appTodo.css';

export default function AppTodo() {

    let [tasksAr, setTasksAr] = useState([])

    useEffect(()=> {
        // check if allready heva a save task in local storge and update the array is exist;
        if(localStorage['Tasks']) {
            setTasksAr(JSON.parse(localStorage['Tasks']))
        }
    }, [])

    const addTaskToArray =(_task)=> {
        let sortAr = [...tasksAr, _task];
        sortAr = sortBy(sortAr, 'time');
        // setTasksAr(sortAr);  declare on the save to local function
        // console.log(tasksAr);
        saveToLocal(sortAr);
    }

    const removeAllTasks =(_ar)=> {
        // setTasksAr([]); declare on the save to local function
        saveToLocal([])
    }

    const removeSingleTask =(_id)=> {
        let tempAr = tasksAr.filter(task => task.id !== _id);
        // setTasksAr(tempAr); declare on the save to local function
        saveToLocal(tempAr)
    }

    const saveToLocal =(_ar)=> {
        localStorage.setItem('Tasks', JSON.stringify(_ar));
        setTasksAr(_ar);
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

import React, { useRef } from 'react'

export default function TaskInput(props) {

    let addTask = props.addTask;
    let removeAllTasks = props.removeAllTasks;

    let nameRef = useRef();
    let timeRef = useRef();

    const onAddTask =()=> {
        let todoItem = {
            name: nameRef.current.value,
            time: timeRef.current.value,
            id: Date.now(),
        }
        addTask(todoItem);
        console.log(todoItem);
    }


  return (
    <div>
        <h3>Task name:</h3>
        <input ref={nameRef} type="text" placeholder='Add your task' className='form-control'/>
        <h3>Task time:</h3>
        <input ref={timeRef} type="time" defaultValue='09:00' className='form-control' />
        <div className='my-3 text-center'>
            <button onClick={onAddTask} className='btn btn-success me-3'>Add task</button>
            <button onClick={
                ()=> removeAllTasks()
            } className='btn btn-danger'>Reset tasks</button>
        </div>
    </div>
  )
}

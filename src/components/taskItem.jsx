import React from 'react'

export default function TaskItem(props) {

    let {name, time, id} = props.task;
    let removeSingleTask = props.removeSingleTask;


  return (
    <div className='shadow my-2 p-2'>
        <button onClick={()=> removeSingleTask(id)} className='btn btn-danger float-end'>x</button>
        <h4>{name} - {time}</h4>
    </div>
  )
}

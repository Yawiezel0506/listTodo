import React from 'react'

export default function TaskInput() {
  return (
    <div>
        <h3>Task name:</h3>
        <input type="text" placeholder='Add your task' className='form-control'/>
        <h3>Task time:</h3>
        <input type="time" defaultValue='09:00' className='form-control' />
        <div className='my-3 text-center'>
            <button className='btn btn-success me-3'>Add task</button>
            <button className='btn btn-danger'>Reset tasks</button>
        </div>
    </div>
  )
}

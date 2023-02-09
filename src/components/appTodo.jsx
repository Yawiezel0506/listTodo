import React from 'react'
import TaskInput from './taskInput'
import TaskList from './taskList'

export default function AppTodo() {
  return (
    <div className='container'>
        <h1>App Todo</h1>
        <TaskInput/>
        <TaskList/>
    </div>
  )
}

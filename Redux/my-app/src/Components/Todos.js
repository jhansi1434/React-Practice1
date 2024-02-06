import React from 'react'
import {  useSelector } from 'react-redux'

const Todos = () => {
    const todos=useSelector(state=>state.todos)
    console.log(todos)
  return (
    <div className="bg-yellow-100 border rounded text-center ml-72 mr-72 mt-4">
     {todos.map((todo)=>(
        <div key={todo.id}>{todo.text}</div>
     ))}
    </div>
  )
}

export default Todos

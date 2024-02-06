import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
const[input,setInput]=useState('');
const dispatch=useDispatch();

const addTodoHandler=(e)=>{

    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
}



  return (
    <div>
<form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center">
    <input
    type="text"
    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500
    focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-200 py-1 px-0
    leading-8 transition-colors duration-200 ease-in-out"
    placeholder="...todo"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <button type="submit" className="bg-red-300 border rounded p-2">AddTodo</button>
</form>
    </div>
  )
}

export default AddTodo

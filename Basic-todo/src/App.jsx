import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import Todo from './components/Todo/Todo'
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] =useState([
    {id:1, text:"todo1", isFinished : false },
    {id:2, text:"todo2", isFinished : false },
    {id:3, text:"todo3", isFinished : false }
  ])

function addTodo(todoText){
  var  nextid = new Date();
  setTodos([...todos,{id:nextid,text:todoText,isFinished:false}])
}


  return (
    <div> 
      < AddTodo  addTodo={addTodo}/>
     <TodoList todos ={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
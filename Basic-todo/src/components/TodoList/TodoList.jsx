import { useState } from "react"
import Todo from "../Todo/Todo"

function TodoList({todos,setTodos}){

    function editTodo(id,newText){
     setTodos( todos.map((todo) =>{
        return (todo.id == id)? {...todo, text : newText} : todo
      }))
    }

    function deleteTodo(id){
      setTodos(todos.filter((todo)=> todo.id!=id))
    }

    return(
        <div>
        {todos.map((todo) => <Todo
        key ={todo.id}
        Id={todo.id}
        text ={todo.text}
        isFinished ={todo.isFinished}
        editTodo ={editTodo}
        deleteTodo ={deleteTodo}
        />)}
        </div>
    )
}

export default TodoList
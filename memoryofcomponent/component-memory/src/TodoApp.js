import {useState} from 'react';
import TodoList from './TodoLIst';

function TodoApp(){
    const[todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState("");
    return(
        <div> 
            <input type="text" placeholder='new todo..'
            onChange={(event) => setNewTodo(event.target.value)}
            
            
            
            /><br/>
            <button onClick={() => setTodos([...todos,newTodo])}> Add todo </button>
            <TodoList todos={todos}/>
        </div>
    );
}
  
export default TodoApp;
 
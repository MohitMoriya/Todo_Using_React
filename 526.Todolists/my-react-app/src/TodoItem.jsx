import React, { useState } from 'react';
import './TodoItem.css'
function TodoItem(props) {
    const [isEditing,setisEditing] = useState(false);
    const [todoData,setTododata] = useState(props.todo.data);

    return (
       <div>
        <li>
        {
            (isEditing)? <input type="text" value={todoData} onChange={(e) => setTododata(e.target.value)} /> : <span>{props.todo.data}</span>
        }
        </li>
        
        <button onClick={() =>{
            props.delete();
        }
        }> Done </button>

        <button onClick={() => {
            setisEditing(!isEditing)
            props.edit(todoData);
        }}> Edit </button>

       </div>
    ); 
}

export default TodoItem



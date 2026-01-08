import { useState } from "react"

function Todo({Id,text,isFinished,editTodo,deleteTodo}){
    const [isEditting,setisEditting] = useState(false);
    const [newText,setnewText] = useState(text);
    return (
        <div>
        <input type="checkbox" value={isFinished}  />

        {(isEditting? (
            <input type="text" value={newText} onChange={(e) =>{
                setnewText(e.target.value);
            }} />
        ) : (<span>{text}</span>))}

        <button 
        onClick={() => {
            if(isEditting){
                editTodo(Id,newText);
            }
            setisEditting(!isEditting)

        } }> {isEditting? "Save" : "edit"} </button>

        <button onClick={() => deleteTodo(Id) }>Delete</button>
        </div>
    )
}

export default Todo
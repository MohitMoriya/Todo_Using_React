import {useState} from 'react'
function AddTodo({addTodo}){
 const [textAdd,settextAdd] = useState("");

    return(
        <div>
        <input type="Text" placeholder=" Add Your Todo " value={textAdd} onChange={(e)=> {settextAdd(e.target.value)}} />
        <button onClick={()=> {addTodo(textAdd),settextAdd("") }}>submit</button>
        </div>
    )
}

export default AddTodo

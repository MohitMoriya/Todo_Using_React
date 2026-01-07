// import TodoItem from './TodoItem.jsx'

// function Todo(props) {
//   const todoItems = props.itemList.map((todo) =>
//     <TodoItem key={todo.id} todo={todo} />
//   )

//   function update(){
//     todoItems.push(<li> Another todo </li>)
//   }

//   return( 
//  <>
//   <ul>{todoItems}</ul>
//   <button onClick={update}>  Click </button>
//  </>
// )
// }

// export default Todo


import TodoItem from './TodoItem.jsx'
import { useState } from 'react';
function Todo(props) {

const  [todoItems, setTodoItems] = useState([  {data: 'todo1',id:'123'}  ,   {data: 'todo2',id:'132'}  ,   {data: 'todo3',id:'321'}  ]);
const [inputText, setInputText] = useState("");

function deleteTodo(id){
  const remainingItems = todoItems.filter((todo) => todo.id !=id);
  setTodoItems(remainingItems);
}

function editTodo(id,newData){
  const updatedTodos = todoItems.map((todo) => {
    if(todo.id == id) todo.data = newData;
    return todo;
  })
}

return(
<>

<input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />

<button onClick={() => {setTodoItems([...todoItems,{ data: inputText, id: Date.now() }]);setInputText("");}}>
  Add Todo
</button>
<ul>{todoItems.map((todo) => <TodoItem 
                            todo ={todo}
                             key={todo.id} 
                             delete ={() => deleteTodo(todo.id)} 
                             edit = {(newTodo) => editTodo(todo.id,newTodo)}
                             />)}</ul>
</> 
)
}

export default Todo



function TodoList({ todos}){ // todos ->[{},{}]
 return(
    todos.map((todo,index)=><li key={index} >{todo}</li>)
)
}
export default TodoList;         
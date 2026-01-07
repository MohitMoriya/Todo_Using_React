import './App.css'
import Todo from './Todo'
function App() {
 const todos = [
  { id: 1, data: 'todo1' },
  { id: 2, data: 'todo2' },
  { id: 3, data: 'todo3' },
  { id: 4, data: 'todo4' }
];

  return (
    <>
  <Todo itemList={todos}/>
    </>
  )
}

export default App

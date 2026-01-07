import {useState} from 'react';

// function Counter(){

//     let x = 10;
//     function updateX(){
//         console.log("updating X");
//         x+=1;
//     }
//     const [count,setCount] = useState(10);
//   return(
//   <div className="counter">
//     <span id="counterValue">X : {x}</span><br/>
//     <span id="counterValue">Count : {count}</span><br/>
//         <button onClick={updateX} > Click and Update X </button> <br/>
//         <button onClick = {() => setCount(count+1)} > Click and Update count </button> 
//     </div>
    
// )

// }


/*
import {useState} from 'react';
let x = 10;
function Counter(){

    function updateX(){
        console.log("updating X");
        x+=1;
    }
    const [count,setCount] = useState(10);
  return(
  <div className="counter">
    <span id="counterValue">X : {x}</span><br/>
    <span id="counterValue">Count : {count}</span><br/>
        <button onClick={updateX} > Click and Update X </button> <br/>
        <button onClick = {() => setCount(count+1)} > Click and Update count </button> 
    </div>
    
)

}

export default Counter;
this will update the value X : x in web page by the current value of x if and onlyif click and update count buton is presed because it does re-renders 
*/


function Counter() {
const [x, setX] = useState(10);
const [count, setCount] =  useState(10);
const [text, setText] =  useState("");
const [todo, todoText] =  useState("");

return (
<div className="counter">
<span id="countervalue">x: {x}</span> <br/>
<span id="countervalue">Count: {count}</span> <br/>

 

<button onClick={ () => setX(x+1) }>Click and Update X</button> <br/>
<button onClick={ () => setCount(count+1) }>Click and Update Count</button><br/>

<input type="text" id="inp" onChange={(event)=>setText(event.target.value)}/> <br/>
<button onClick={()=> todoText(document.getElementById("inp").value)}>Add</button><br/>
<span> {todo}</span>

</div>
)
}

export default Counter;
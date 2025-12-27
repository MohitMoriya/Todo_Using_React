//  import React from "react";
//     import ReactDOM from "react-dom/client";
 

const Custom = () =>{
    return (
        <nav>
            <div>1</div>
            <input></input>
            <div>2</div>
        </nav>
    )
}


// this part will be written in App.js in create-react-app
 const App = () =>{
    return ( 
        <div> 
            <h1>Welcome to React</h1>
            <button> Click </button>
            <Custom/>
            <Custom/>
            <Custom/>
            <Custom/>
            <Custom/>
            </div>
        );
    }

    // this part will be written in index.js in create-react-app
     const rootNode =document.getElementById("root"); 
     const root=  ReactDOM.createRoot(rootNode);

     root.render(<App/>);
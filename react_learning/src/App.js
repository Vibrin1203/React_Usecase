
// import './App.css';
// import Header from './components/Keeper/header';

// function App() {
  
//   return (
//     <div>
    
      
//     </div>
//   );
// }

// export default App;

import react from "react"
import { useState } from "react"

function App(){
    const [count,setCount]=useState(0);
    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}
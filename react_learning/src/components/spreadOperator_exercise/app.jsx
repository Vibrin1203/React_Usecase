import React from "react";
import { useState } from "react";

function App() {
    const [inputText, setinputText] = useState("");
    const [items, setItems] = useState([]); //important

   
    function handleChange(event) {
        const newValue = event.target.value;
        setinputText(newValue);
    }

    function addItem() {               //important
        setItems((prevItems)=>{
            return [...prevItems,inputText]
        })
        setinputText("");
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} value={inputText} />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {
                        items.map(todoitem => 
                            <li>{todoitem}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import { useState } from "react";
import Todoitem from "./TodoItem";
import InputArea from "./inputArea";

function App() {
    
    const [items, setItems] = useState([]); //important

    function addItem(inputText) {               //important
        setItems((prevItems)=>{
            return [...prevItems,inputText]
        })
        
    }

    function deleteItem(id){
       setItems(prevItems=>{
        return prevItems.filter(
            (item,index)=>{
              return index!== id;  
            }
        )
       })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea
            onAdd={addItem}
            />
            <div>
                <ul>
                    {
                        items.map((todoitem,index) =>( 
                            <Todoitem 
                            key={index}
                            id={index}
                            text={todoitem}
                            onChecked={deleteItem}/>
                        )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;

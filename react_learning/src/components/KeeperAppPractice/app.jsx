import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App(){
    const [notes,setNotes]=useState([])

    function onAdd(newNote){
        setNotes((prevNote)=>{
            return [...prevNote,newNote];
        })
    }

    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            })
        })
    }
    return(
        <div>
            <CreateNote
            onAdd={addNote}
            />
            {
                notes.map((noteItem,index)=>{
                    return(
                    <Note 
                    id={index}
                    key={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    />
                    )
                })
            }
            
            
        </div>
    )
}

export default App;


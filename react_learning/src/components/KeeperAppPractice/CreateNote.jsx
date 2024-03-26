import React from "react";
import { useState } from "react";

function CreateNote(props){

    const [note,setNote]=useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name,value} =event.target;
        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:[value]
            }
        })
    }
    function submitNote(event){
        props.addNote(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    
  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
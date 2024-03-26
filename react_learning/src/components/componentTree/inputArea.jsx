import React, { useState } from "react";

function InputArea(props) {

    const [inputText, setinputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setinputText(newValue);
    }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={
        ()=>{
            props.onAdd(inputText);
            setinputText("");
        }
      }>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

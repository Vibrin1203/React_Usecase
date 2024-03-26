import React from "react";

function Todoitem(props) {
    
    
    return (
        //passing function as props
        <div onClick={()=>{
            props.onChecked(props.id) // props.onChecked(props.id) here we are calling the function and instead we need to pass the function
        }}> 
            <li >{props.text}</li>
        </div>
    )
}

export default Todoitem;
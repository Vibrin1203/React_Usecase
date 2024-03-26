import React from "react";
import { useState } from "react";
//important lesson
function App() {

    const[fullName,setfullName]=useState({
        fName: "",
        lName: ""
    })
    
    function handleChange(event) {
        const newValue= event.target.value; //see simplified code in OneNote
        const inputName= event.target.name;

        setfullName((prevValue)=>{
            if(inputName === "fName"){
                return{
                    fName:newValue,
                    lName:prevValue.lName
                }
            }else if(inputName === "lName"){
                return{
                    fName:prevValue.fName,
                    lName:newValue,
                }
            }
        })
    }

    return (

        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>
                <input name="fName" placeholder="First Name" onChange={handleChange} value={fullName.fName} />
                <input name="lName" placeholder="Last Name"  onChange={handleChange} value={fullName.lName} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;

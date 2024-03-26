import React from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "./notes";

function App(){
    return(
        <div>
            <Header></Header>
            {notes.map(noteitem=>(
                <Note key={noteitem.key} title={noteitem.title} content={noteitem.content} />
            ))}
            
            <Footer></Footer>
        </div>
    )
}

export default App;
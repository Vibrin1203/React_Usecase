import React from "react";
import Entry from "./entry";
import emojipedia from "./emojipedia";

function createEntry(emojiterm){
    return(
        <Entry
        key={emojiterm.id}
        emoji={emojiterm.emoji}
        name={emojiterm.name}
        description={emojiterm.meaning} //this is by using usual method down below another approach arrow function is used
        />
        

    )
}


function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createEntry =>(
                    <Entry key={emojiterm.id} emoji={emojiterm.emoji} name={emojiterm.name} description={emojiterm.meaning} //arrow function
                    />
                ))}
                
            </dl>
        </div>
    );
}

export default App;

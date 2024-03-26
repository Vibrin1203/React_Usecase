import React from "react";
import Form from "./form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
        {userIsRegistered?<Form name="Login" isRegistered={userIsRegistered} />:<Form name="Register" />}
      
    </div>
  );
}

export default App;

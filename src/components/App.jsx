import React from "react";
import Login from "./Login";

let userIsRegisterd = false;


function App() {
  return (
    <div className="container">
    { userIsRegisterd? <Login isRegisterd={userIsRegisterd} /> : <Login /> }
    </div>
  );
}

export default App;

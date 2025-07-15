import Login from "./components/Login"
import Register from "./components/Register"
import React from "react";
import Signup from "./components/Signup";


function App() {
  return(
    <div>
    <h1><center>Welcome to the Application</center></h1>
    <p>Please login or register to continue.</p>
    <Signup/>
    <Register />
      <Login />
      
      
    </div>
  )
}

export default App

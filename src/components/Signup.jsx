import axios from "axios";
import { use, useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [roleNames, setRoles] = useState("");

  async function addNewEmployee(e) {
    e.preventDefault();
    const roleArray = roleNames.split(",").map(role => role.trim());
    console.log(roleArray);

    const req = axios.post("https://springboot-mlyo.onrender.com/api/auth/register", {
      name, email,password, username, roleNames:["ROLE_USER"]});
      console.log(req);

     if(req.Data){
        alert (req.data)
     }
     else{
        alert("Error occured");
     }
    
  }

  return (
    <section>
      <h1>Signup Page</h1>
      <div>
        <form onSubmit={addNewEmployee}>
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="roles">Roles (comma separated)</label>
          <input
            type="text"
            id="roles"
            name="roles"
            value={roleNames}
            onChange={(e) => setRoles(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
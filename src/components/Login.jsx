import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        userName,
        password,
      });

      const { token, role, username } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username);

      alert("Login Successful!");
      console.log("Logged in with token:", token);

    } catch (e) {
      console.error("Login Error:", e);
      alert("Invalid Credentials");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          value={userName}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

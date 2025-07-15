import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [roleNames, setRoleNames] = useState(["ROLE_USER"]);

  const handleRoleChange = (role) => {
    setRoleNames((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  const addNewEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://springboot-mlyo.onrender.com/api/auth/register", {
        name,
        email,
        password,
        username,
        roleNames,
      });

      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={addNewEmployee} style={styles.form}>
        <h2 style={styles.title}>Signup</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <div style={styles.roleLabel}>Select Roles:</div>
        <div style={styles.roleRow}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={roleNames.includes("ROLE_USER")}
              onChange={() => handleRoleChange("ROLE_USER")}
            />
            ROLE_USER
          </label>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={roleNames.includes("ROLE_ADMIN")}
              onChange={() => handleRoleChange("ROLE_ADMIN")}
            />
            ROLE_ADMIN
          </label>
        </div>

        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh", 
    backgroundColor: "#f7f7f7",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "340px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    textAlign: "center",
    marginBottom: "8px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  roleLabel: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  roleRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  checkboxLabel: {
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Signup;

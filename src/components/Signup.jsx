import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [roleName, setRoleName] = useState(["ROLE_USER"]);

  const handleRoleChange = (role) => {
    setRoleName((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  const addNewEmployee = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      userName,  
      roleName,
    };

    try {
      const response = await axios.post("https://springboot-mlyo.onrender.com/api/auth/register", payload);
      console.log("Registration Success:", response.data);
      alert("Registered successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setUserName("");
      setRoleName(["ROLE_USER"]);
    } catch (err) {
      console.error("Registration Error:", err.response?.data || err.message);
      alert("Registration failed. Check console for more info.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={addNewEmployee} style={styles.form}>
        <h2 style={styles.title}>Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
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
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
              checked={roleName.includes("ROLE_USER")}
              onChange={() => handleRoleChange("ROLE_USER")}
            />
            ROLE_USER
          </label>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={roleName.includes("ROLE_ADMIN")}
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
    minHeight: "80vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  roleLabel: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  roleRow: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
  },
  checkboxLabel: {
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Signup;

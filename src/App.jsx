import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Register from "./components/Register";
import Login from "./components/Login";
import AddEmployee from "./components/AddEmployee";
import ViewEmployees from "./components/ViewEmployees";
import Todo from "./components/ToDo";

const getUserRole = () => {
  return localStorage.getItem("role");
};

const Navbar = () => {
  const role = getUserRole();

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLeft}>
        <h2>Employee Management System</h2>
      </div>
      <div style={styles.navRight}>
        {role === "admin" && (
          <>
            <Link to="/add-employee" style={styles.navButton}>Add Employee</Link>
            <Link to="/employees" style={styles.navButton}>View Employees</Link>
          </>
        )}
        {role === "user" && (
          <>
            <Link to="/employees" style={styles.navButton}>Employees</Link>
            <Link to="/todo" style={styles.navButton}>ToDo</Link>
          </>
        )}
        {!role && (
          <>
            <Link to="/login" style={styles.navButton}>Login</Link>
            <Link to="/register" style={styles.navButton}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Employee Management System. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  const role = getUserRole();

  return (
    <Router>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/add-employee" element={
            role === "admin" ? <AddEmployee /> : <Unauthorized />
          } />
          <Route path="/employees" element={
            role === "admin" ? <ViewEmployees editable={true} />
              : role === "user" ? <ViewEmployees editable={false} />
              : <Unauthorized />
          } />
          <Route path="/todo" element={
            role === "user" ? <Todo /> : <Unauthorized />
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

const Unauthorized = () => (
  <div style={{ padding: "20px", color: "red", fontWeight: "bold" }}>
    Unauthorized Access
  </div>
);

const styles = {
  navbar: {
    backgroundColor: "#282c34",
    padding: "15px 30px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLeft: {
    fontSize: "24px",
  },
  navRight: {
    display: "flex",
    gap: "10px",
  },
  navButton: {
    backgroundColor: "#61dafb",
    color: "#000",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
  },
  main: {
    padding: "20px",
    minHeight: "80vh",
  },
  footer: {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "auto",
  },
};

export default App;
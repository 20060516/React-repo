import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Register from "./components/Register";
import Login from "./components/Login";
import AddEmployee from "./components/AddEmployee";
import ViewEmployees from "./components/ViewEmployees";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navLeft}>
        <h2>Employee Management System</h2>
      </div>
      <div style={styles.navRight}>
        <Link to="/add-employee" style={styles.navButton}>Add Employee</Link>
        <Link to="/employees" style={styles.navButton}>View Employees</Link>
        <Link to="/login" style={styles.navButton}>Login</Link>
        <Link to="/register" style={styles.navButton}>Register</Link>
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
  return (
    <Router>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employees" element={<ViewEmployees />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

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

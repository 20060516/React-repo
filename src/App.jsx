import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Register from "./components/Register";
import Login from "./components/Login";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navLeft}>
        <h2>Employee Management System</h2>
      </div>
      <div style={styles.navRight}>
        <Link to="/register" style={styles.navButton}>Register</Link>
        <Link to="/login" style={styles.navButton}>Login</Link>
      </div>
    </nav>
  );
};

const Header = () => (
  <header style={styles.header}>
    
  </header>
);

const Footer = () => (
  <footer style={styles.footer}>
    <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <main style={styles.main}>
        <Routes>
        <Route
    path="/"
    element={
      <div style={styles.fullCenterContainer}>
        <Signup />
      </div>
    }
  />
          <Route path="/" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

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
  header: {
  padding: "10px", 
  backgroundColor: "#f0f0f0",
  textAlign: "center",
},
footer: {
  padding: "10px", 
  backgroundColor: "#282c34",
  color: "white",
  textAlign: "center",
  fontSize: "14px",
},
  main: {
    padding: "20px",
  },
};

export default App;

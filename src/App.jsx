import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEmployee from "./components/AddEmployee";
import ViewEmployees from "./components/ViewEmployees";
import Unauthorized from "./components/Unauthorized";
import TaskView from "./components/TaskView";
import TaskList from "./components/TaskList";

const getUserRole = () => localStorage.getItem("role");
const isLoggedIn = () => !!localStorage.getItem("role");
const Navbar = () => {
  const navigate = useNavigate();
  const role = getUserRole();
  const loggedIn = isLoggedIn();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.navTitle}>Employee Management System</div>
      <nav style={styles.navLinks}>
        {!loggedIn ? (
          <>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </>
        ) : (
          <>
            {role === "admin" && (
              <Link to="/add-employee" style={styles.link}>Add Employee</Link>
            )}
            <Link to="/employees" style={styles.link}>Employees</Link>
            <Link to="/tasks" style={styles.link}>Tasks</Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer style={styles.footer}>© 2025 MyApp. All rights reserved.</footer>
);

const App = () => {
  const role = getUserRole();

  return (
    <Router>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-employee" element={role === "admin" ? <AddEmployee /> : <Unauthorized />} />
          <Route path="/employees" element={<ViewEmployees />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskView />} />
          <Route path="*" element={<Unauthorized />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#1e1e2f",
    color: "#fff",
    padding: "12px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  navTitle: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  link: {
    backgroundColor: "#61dafb",
    padding: "6px 14px",
    borderRadius: "4px",
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.3s",
  },
  logoutBtn: {
    padding: "6px 14px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "500",
  },
  main: {
    padding: "40px 20px",
    minHeight: "80vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  footer: {
    backgroundColor: "#1e1e2f",
    color: "#fff",
    textAlign: "center",
    padding: "12px 0",
    fontSize: "14px",
    fontFamily: "Segoe UI, sans-serif",
  },
};

export default App;

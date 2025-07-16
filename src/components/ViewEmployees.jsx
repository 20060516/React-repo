import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewEmployees = ({ editable }) => {
  const [employees, setEmployees] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:8080/employee', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployees();
  }, [token]);

  const handleEdit = (id) => {
    console.log("Edit employee with ID:", id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Roles</th>
            {editable && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.userName}</td>
              <td>{emp.roles.map(r => r.roleName).join(', ')}</td>
              {editable && (
                <td>
                  <button onClick={() => handleEdit(emp.empId)} style={buttonStyle}>
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#61dafb",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default ViewEmployees;

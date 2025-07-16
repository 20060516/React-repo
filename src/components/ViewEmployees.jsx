import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewEmployees = () => {
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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Username</th><th>Roles</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployees;

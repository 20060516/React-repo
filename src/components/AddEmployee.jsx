import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [form, setForm] = useState({
    empId: '',
    name: '',
    email: '',
    userName: '',
    password: '',
    roleName: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post("http://localhost:8080/employee", {
        empId: parseInt(form.empId),
        name: form.name,
        email: form.email,
        userName: form.userName,
        password: form.password,
        roleName: [form.roleName]
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Employee Added Successfully");
      setForm({ empId: '', name: '', email: '', userName: '', password: '', roleName: '' });
    } catch (err) {
      console.error(err);
      alert("Failed to add employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input name="empId" placeholder="Employee ID" value={form.empId} onChange={handleChange} required /><br /><br />
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br /><br />
        <input name="userName" placeholder="Username" value={form.userName} onChange={handleChange} required /><br /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br /><br />
        <input name="roleName" placeholder="Role (e.g., ROLE_USER)" value={form.roleName} onChange={handleChange} required /><br /><br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;

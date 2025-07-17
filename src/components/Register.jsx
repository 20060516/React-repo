import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    empId: '',
    name: '',
    email: '',
    password: '',
    userName: '',
    roleNames: [],
  });

  // Handle simple input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle comma-separated roles input
  const handleRolesChange = (e) => {
    const roles = e.target.value
      .split(',')
      .map(role => role.trim())
      .filter(role => role !== '');
    setFormData(prev => ({
      ...prev,
      roleNames: roles
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://springboot-mlyo.onrender.com/api/auth/register', {
        ...formData,
        empId: Number(formData.empId),  // Ensure empId is sent as a number
      });
      alert('Registered Successfully!');
      // Optionally clear form
      setFormData({
        empId: '',
        name: '',
        email: '',
        password: '',
        userName: '',
        roleNames: [],
      });
    } catch (err) {
      console.error('Register Error:', err.response?.data || err.message);
      alert('Registration failed. Please check your inputs.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="empId"
          value={formData.empId}
          onChange={handleChange}
          placeholder="Employee ID"
          required
        /><br /><br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        /><br /><br />

        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Username"
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        /><br /><br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        /><br /><br />

        <input
          type="text"
          name="roleNames"
          onChange={handleRolesChange}
          placeholder="Roles (e.g., ROLE_USER, ROLE_ADMIN)"
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

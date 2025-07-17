import { useState } from "react";

const AddEmployee = () => {
  const [form, setForm] = useState({
    empId: "",
    name: "",
    email: "",
    userName: "",
    role: "user"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(form);
    localStorage.setItem("employees", JSON.stringify(employees));
    alert("Employee Added");
    setForm({ empId: "", name: "", email: "", userName: "", role: "user" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input name="empId" value={form.empId} onChange={handleChange} placeholder="ID" required /><br /><br />
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required /><br /><br />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required /><br /><br />
      <input name="userName" value={form.userName} onChange={handleChange} placeholder="Username" required /><br /><br />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select><br /><br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployee;

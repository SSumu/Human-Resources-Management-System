import { useState } from "react";
import "./EmployeeForm.css";

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Name and Email are required");
      return;
    }

    onAdd(form);

    setForm({
      name: "",
      email: "",
      department: "",
      position: "",
      salary: "",
    });
  };

  return (
    <div className="employee-form-container">
      <h3 className="form-title">Add Employee</h3>

      <form onSubmit={handleSubmit} className="employee-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="form-input"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-input"
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="form-input"
        />

        <input
          name="position"
          placeholder="Position"
          value={form.position}
          onChange={handleChange}
          className="form-input"
        />

        <input
          name="salary"
          placeholder="Salary"
          type="number"
          value={form.salary}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="submit-button">
          Add Employee
        </button>
      </form>
    </div>
  );
}

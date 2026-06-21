import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Employees.css";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get("/employees");
        setEmployees(res.data);
      } catch (err) {
        setError("Failed to load employees");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const addEmployee = async () => {
    try {
      await axios.post("/employees", form);

      const res = await axios.get("/employees");
      setEmployees(res.data);

      setForm({
        name: "",
        email: "",
        department: "",
        position: "",
        salary: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`/employees/${id}`);

      const res = await axios.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="employee-container">
      <h2 className="title">Employees</h2>

      {loading && <p className="info">Loading employees...</p>}
      {error && <p className="error">{error}</p>}

      {/* FORM */}
      <div className="form">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        />
        <input
          placeholder="Position"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        />
        <input
          placeholder="Salary"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />

        <button className="add-btn" onClick={addEmployee}>
          Add Employee
        </button>
      </div>

      {/* LIST */}
      <ul className="employee-list">
        {employees.map((emp) => (
          <li key={emp._id} className="employee-card">
            <div>
              <strong>{emp.name}</strong>
              <p>
                {emp.position} | {emp.department}
              </p>
              <span>💰 {emp.salary}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteEmployee(emp._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

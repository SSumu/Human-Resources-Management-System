import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const res = await axios.get("/employees");
    return res.data;
  };

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };

    loadEmployees();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">HRMS Dashboard</h2>

      {/* Summary Cards */}
      <div className="card-container">
        <div className="card">
          <h3>Total Employees</h3>
          <p className="number">{employees.length}</p>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <p className="number">5</p>
        </div>

        <div className="card">
          <h3>Active Users</h3>
          <p className="number">{employees.length}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="actions">
        <button className="btn-primary" onClick={() => navigate("/employees")}>
          Manage Employees
        </button>

        <button className="btn-secondary">View Reports</button>
      </div>

      {/* Recent Employees */}
      <div className="section">
        <h3>Recent Employees</h3>

        <ul className="list">
          {employees.slice(0, 5).map((emp) => (
            <li key={emp._id} className="list-item">
              <div>
                <strong>{emp.name}</strong>
                <p className="small-text">{emp.position}</p>
              </div>
              <span className="badge">{emp.department}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

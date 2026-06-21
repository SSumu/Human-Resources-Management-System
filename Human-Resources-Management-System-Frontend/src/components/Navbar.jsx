import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="nav">
      <h2 className="logo">HRMS</h2>

      <div className="links">
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>

        <Link className="link" to="/employees">
          Employees
        </Link>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

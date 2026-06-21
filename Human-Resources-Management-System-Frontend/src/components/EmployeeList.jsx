import "./EmployeeList.css";

export default function EmployeeList({ employees, onDelete }) {
  return (
    <div className="employee-container">
      <h3 className="title">Employee List</h3>

      <table className="employee-table">
        <thead>
          <tr className="header-row">
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">
                No employees found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp._id} className="row">
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    onClick={() => onDelete(emp._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

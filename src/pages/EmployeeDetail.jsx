import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EmployeeDetail() {
  const { id } = useParams();

  const employees = useSelector(
    (state) => state.employees.employees
  );

  const employee = employees.find(
    (emp) => String(emp.id) === String(id)
  );

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <main>
      <h1>Employee Details</h1>

      <h2>{employee.name}</h2>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Salary:</strong> ₹{employee.salary}
      </p>
    </main>
  );
}

export default EmployeeDetail;
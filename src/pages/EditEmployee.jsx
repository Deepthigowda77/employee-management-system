import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import {
  updateEmployee,
  fetchEmployees,
} from "../redux/employeeSlice";

function EditEmployee() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employee = useSelector((state) =>
    state.employees.employees.find(
      (employee) => employee.id === Number(id)
    )
  );

  const loading = useSelector(
    (state) => state.employees.loading
  );

  const updating = useSelector(
    (state) => state.employees.updating
  );

  useEffect(() => {
    if (!employee) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, employee]);

  const handleUpdateEmployee = async (employeeData) => {
    const updatedEmployee = {
      id: Number(id),
      ...employeeData,
    };

    try {
      await dispatch(updateEmployee(updatedEmployee)).unwrap();

      alert("Employee updated successfully!");

      navigate("/employees");
    } catch (error) {
      alert(`Failed to update employee: ${error}`);
    }
  };

  if (loading || !employee) {
    return (
      <main className="form-page">
        <div className="form-container">
          <h2>Loading employee...</h2>
          <p>Please wait while we load the employee information.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="form-page">
      <div className="form-container">
        <h1>Edit Employee</h1>

        <p className="form-subtitle">
          Update employee information below
        </p>

        <EmployeeForm
          initialData={employee}
          onSubmit={handleUpdateEmployee}
          submitButtonText={
            updating ? "Updating..." : "Update Employee"
          }
        />
      </div>
    </main>
  );
}

export default EditEmployee;
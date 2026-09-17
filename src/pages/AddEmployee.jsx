import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addEmployee } from "../redux/employeeSlice";

import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const adding = useSelector(
  (state) => state.employees.adding
);


  const handleAddEmployee = async (employeeData) => {

    const newEmployee = {
      name: employeeData.name,
      department: employeeData.department,
      experience: Number(employeeData.experience),
      salary: Number(employeeData.salary),
    };

    try {

      await dispatch(
        addEmployee(newEmployee)
      ).unwrap();

      alert("Employee added successfully!");

      navigate("/employees");

   } catch (error) {

  alert(
    `Failed to add employee: ${error.message}`
  );

}
  };


  return (
    <main className="form-page">

      <div className="form-container">

        <h1>Add Employee</h1>

        <p className="form-subtitle">
          Enter employee information below
        </p>

        <EmployeeForm
  initialData={null}
  onSubmit={handleAddEmployee}
  submitButtonText={
    adding ? "Adding..." : "Add Employee"
  }
/>

      </div>

    </main>
  );
}

export default AddEmployee;
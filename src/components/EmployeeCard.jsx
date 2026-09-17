import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEmployee } from "../redux/employeeSlice";


function EmployeeCard({ employee, onEdit }) {
  const dispatch = useDispatch();

  const deleting = useSelector(
  (state) => state.employees.deleting
);

  console.log("EmployeeCard rendered:", employee.name);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (confirmDelete) {
      dispatch(removeEmployee(employee.id));
    }
  };

  return (
    <div className="employee-card">

      {/* Employee Information */}
      <div className="employee-info">

        <div className="employee-avatar">
          {employee.name.charAt(0).toUpperCase()}
        </div>

        <div className="employee-details">
          <h3>{employee.name}</h3>

          <p className="employee-department">
            {employee.department}
          </p>
        </div>

      </div>


      {/* Employee Details */}
      <div className="employee-meta">

        <div>
          <span>Experience</span>

          <strong>
            {employee.experience || 0} years
          </strong>
        </div>

        <div>
          <span>Salary</span>

          <strong>
            ₹{employee.salary || 0}
          </strong>
        </div>

      </div>


      {/* Actions */}
      <div className="employee-actions">

        <button
          className="edit-button"
          onClick={() => onEdit(employee.id)}
        >
          Edit
        </button>

   <button
  className="delete-button"
  onClick={handleDelete}
  disabled={deleting}
>
  {deleting ? "Deleting..." : "Delete"}
</button>

      </div>

    </div>
  );
}

export default React.memo(EmployeeCard);
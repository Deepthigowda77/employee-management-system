import { useState } from "react";
import { useNavigate } from "react-router-dom";


function EmployeeForm({
  initialData,
  onSubmit,
  submitButtonText = "Save",
}) {

    const navigate = useNavigate();

  const [name, setName] = useState(
    initialData?.name || ""
  );

  const [department, setDepartment] = useState(
    initialData?.department || ""
  );

  const [experience, setExperience] = useState(
    initialData?.experience || ""
  );

  const [salary, setSalary] = useState(
    initialData?.salary || ""
  );

  


  const handleSubmit = (event) => {

    event.preventDefault();

    const employeeData = {
      name,
      department,
      experience: Number(experience),
      salary: Number(salary),
    };

    onSubmit(employeeData);
  };


  return (
    <form onSubmit={handleSubmit}>

      {/* Name */}

      <div className="form-group">

        <label>Employee Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Enter employee name"
          required
        />

      </div>


      {/* Department */}

      <div className="form-group">

        <label>Department</label>

        <input
          type="text"
          value={department}
          onChange={(event) =>
            setDepartment(event.target.value)
          }
          placeholder="Enter department"
          required
        />

      </div>


      {/* Experience */}

      <div className="form-group">

        <label>Experience</label>

        <input
          type="number"
          value={experience}
          onChange={(event) =>
            setExperience(event.target.value)
          }
          placeholder="Years of experience"
          min="0"
          required
        />

      </div>


      {/* Salary */}

      <div className="form-group">

        <label>Salary</label>

        <input
          type="number"
          value={salary}
          onChange={(event) =>
            setSalary(event.target.value)
          }
          placeholder="Enter salary"
          min="0"
          required
        />

      </div>


      {/* Submit */}

      <div className="form-actions">
  <button
    type="button"
    className="cancel-button"
    onClick={() => navigate("/employees")}
  >
    Cancel
  </button>

  <button
    type="submit"
    className="submit-button"
  >
    {submitButtonText}
  </button>
</div>

    </form>
  );
}

export default EmployeeForm;
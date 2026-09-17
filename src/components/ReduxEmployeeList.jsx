import { useSelector } from "react-redux";

function ReduxEmployeeList() {

  const employees = useSelector(
    (state) => state.employees.employees
  );

  return (
    <main>

      <h1>Redux Employee List</h1>

      <h2>
        Total Employees: {employees.length}
      </h2>

      {employees.map((employee) => (

        <div key={employee.id}>

          <h3>{employee.name}</h3>

          <p>
            Department: {employee.department}
          </p>

          <p>
            Salary: ₹{employee.salary}
          </p>

          <hr />

        </div>

      ))}

    </main>
  );
}

export default ReduxEmployeeList;
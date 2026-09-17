// import { useCallback, useMemo, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import EmployeeCard from "../components/EmployeeCard";

// function Employees() {

//   // Get employees from Redux
//   const employees = useSelector(
//     (state) => state.employees.employees
//   );

//   const navigate = useNavigate();

//   // Search state
//   const [search, setSearch] = useState("");

//   // Filter employees
//   const filteredEmployees = useMemo(() => {

//     console.log("Filtering employees...");

//     return employees.filter((employee) =>
//       employee.name
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );

//   }, [employees, search]);


//   // Calculate total salary
//   const totalSalary = useMemo(() => {

//     console.log("Calculating total salary...");

//     return employees.reduce(
//       (total, employee) =>
//         total + Number(employee.salary || 0),
//       0
//     );

//   }, [employees]);


//   // Edit employee
//   const handleEdit = useCallback((id) => {

//     navigate(`/employees/edit/${id}`);

//   }, [navigate]);


//   // Add employee
//   const handleAddEmployee = useCallback(() => {

//     navigate("/employees/add");

//   }, [navigate]);


//   console.log("Employees page rendered");


//   return (
//     <main className="employees-page">

//       {/* Page Header */}

//       <div className="employees-header">

//         <div>
//           <h1>Employees</h1>

//           <p>
//             Manage your employees and their information
//           </p>
//         </div>

//         <button
//           className="add-employee-button"
//           onClick={handleAddEmployee}
//         >
//           + Add Employee
//         </button>

//       </div>


//       {/* Statistics */}

//       <div className="employee-stats">

//         <div className="employee-stat-card">

//           <span className="stat-icon">
//             👥
//           </span>

//           <div>
//             <p>Total Employees</p>
//             <h2>{employees.length}</h2>
//           </div>

//         </div>


//         <div className="employee-stat-card">

//           <span className="stat-icon">
//             💰
//           </span>

//           <div>
//             <p>Total Salary</p>
//             <h2>₹{totalSalary}</h2>
//           </div>

//         </div>


//         <div className="employee-stat-card">

//           <span className="stat-icon">
//             🔎
//           </span>

//           <div>
//             <p>Showing</p>
//             <h2>{filteredEmployees.length}</h2>
//           </div>

//         </div>

//       </div>


//       {/* Search */}

//       <div className="employee-search">

//         <input
//           type="text"
//           placeholder="Search employee by name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//       </div>


//       {/* Employee List */}

//       <div className="employee-list-section">

//         <div className="employee-list-header">

//           <h2>Employee List</h2>

//           <span>
//             {filteredEmployees.length} employee(s)
//           </span>

//         </div>


//         {filteredEmployees.length === 0 ? (

//           <div className="no-employees">

//             <div className="no-employees-icon">
//               👥
//             </div>

//             <h3>No employees found</h3>

//             <p>
//               Try a different search or add a new employee.
//             </p>

//           </div>

//         ) : (

//           <div className="employee-list">

//             {filteredEmployees.map((employee) => (

//               <EmployeeCard
//                 key={employee.id}
//                 employee={employee}
//                 onEdit={handleEdit}
//               />

//             ))}

//           </div>

//         )}

//       </div>

//     </main>
//   );
// }

// export default Employees;


import {
  useEffect,
  useMemo,
  useCallback,
  useState,
} from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { useNavigate } from "react-router-dom";

import EmployeeCard from "../components/EmployeeCard";

import { fetchEmployees } from "../redux/employeeSlice";

function Employees() {
  // ========================================
  // REDUX
  // ========================================

  const dispatch = useDispatch();

  const employees = useSelector(
    (state) => state.employees.employees
  );

  const loading = useSelector(
    (state) => state.employees.loading
  );

  const error = useSelector(
    (state) => state.employees.error
  );

  // ========================================
  // NAVIGATION
  // ========================================

  const navigate = useNavigate();

  // ========================================
  // SEARCH STATE
  // ========================================

  const [search, setSearch] = useState("");

  // ========================================
  // FETCH EMPLOYEES
  // ========================================

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  // ========================================
  // FILTER EMPLOYEES
  // ========================================

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [employees, search]);

  // ========================================
  // TOTAL SALARY
  // ========================================

  const totalSalary = useMemo(() => {
    return employees.reduce(
      (total, employee) =>
        total + Number(employee.salary || 0),
      0
    );
  }, [employees]);

  // ========================================
  // EDIT EMPLOYEE
  // ========================================

  const handleEdit = useCallback(
    (id) => {
      navigate(`/employees/edit/${id}`);
    },
    [navigate]
  );

  // ========================================
  // LOADING
  // ========================================
if (loading) {
  return (
    <main className="employees-page">
      <div className="status-container">
        <div className="loading-spinner"></div>
        <h2>Loading employees...</h2>
        <p>Please wait while we load the employee data.</p>
      </div>
    </main>
  );
}

if (error) {
  return (
    <main className="employees-page">
      <div className="status-container error-container">
        <h2>Something went wrong</h2>

        <p>{error}</p>

        <button
          className="submit-button"
          onClick={() => dispatch(fetchEmployees())}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}

  // ========================================
  // UI
  // ========================================

  return (
    <main className="employees-page">

      <div className="employees-header">
        <div>
          <h1>Employees</h1>

          <p>
            Manage your employees
          </p>
        </div>

        <button
          className="submit-button"
          onClick={() =>
            navigate("/employees/add")
          }
        >
          Add Employee
        </button>
      </div>

      {/* SEARCH */}

      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search employees..."
        />
      </div>

      {/* STATISTICS */}

      <div className="employee-stats">

        <div className="stat-card">
          <span>Total Employees</span>

          <strong>
            {employees.length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Filtered Employees</span>

          <strong>
            {filteredEmployees.length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Total Salary</span>

          <strong>
            ₹{totalSalary}
          </strong>
        </div>

      </div>

      {/* EMPLOYEE LIST */}

      <div className="employee-list">

        {filteredEmployees.length === 0 ? (
          <p>
            No employees found.
          </p>
        ) : (
          filteredEmployees.map(
            (employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onEdit={handleEdit}
              />
            )
          )
        )}

      </div>

    </main>
  );
}

export default Employees;
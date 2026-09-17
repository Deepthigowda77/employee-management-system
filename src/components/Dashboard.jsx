// function Dashboard() {

// const userName = "Deepthi";
// const company = "google";
// const experience = 2.8;



// return(
//     <main>
//         <h1>Dashboard</h1>
// <h2> Welcome {userName}</h2>
// <p>Company :  {company}</p>
// <p>Experience :{experience} years</p>
// <p>Current Year : {new Date().getFullYear()}</p>

// <p>Next Year Experience: {experience + 1} years</p>



//     </main>
// );


//       }
// export default Dashboard;


//PROPS

// function Dashboard(props) {
//   return (
//     <main>
//       <h1>Dashboard</h1>

//       <h2>Welcome {props.name} 👋</h2>

//       <p>Department: {props.department}</p>

//       <p>Experience: {props.experience} Years</p>
//     </main>
//   );
// }

// export default Dashboard;

//USE STATE

// import { useState } from "react";

// function Dashboard() {

//     const [count, setCount] = useState(100);

//     function increase() {
//         setCount(count + 5);
//     }

//     return (
//         <main>

//             <h1>Counter</h1>

//             <h2>{count}</h2>

//             <button onClick={increase}>
//                 Increase
//             </button>

//         </main>
//     );
// }

// export default Dashboard;







// EVENT HANDLER

// import { useState } from "react";
// function Dashboard() {
//     const [count,setCount] = useState(0);

//     function increase(){
//         setCount(prev =>prev +5);
//     }

//     return(
//         <main>
//             <h1>Counter</h1>S
//             <h2>{count}</h2>

//             <button onClick={increase}>Add </button>
//         </main>
//     );
// }
// export default Dashboard;



// import { useState } from "react";

// function Dashboard() {

//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(prev => prev + 1);
//   }

//   function decrease() {
//     setCount(prev => prev - 1);
//   }

//   function reset() {
//     setCount(0);
//   }

//   return (
//     <main>

//       <h1>Counter Application</h1>

//       <h2>{count}</h2>


//       <button onClick={increase}>
//         Increase
//       </button>

//       <button onClick={decrease}>
//         Decrease
//       </button>

//       <button onClick={reset}>
//         Reset
//       </button>

//     </main>
//   );

// }

// export default Dashboard;



//CREATE STATE

// import { useState } from "react";

// function Dashboard() {

//   const [employee, setEmployee] = useState({
//     name: "",
//     department: "",
//     experience: "",
//     salary: ""
//   });

//   return (
//     <main>

//       <h1>Employee Form</h1>

//       {/* Employee Name */}

//       <input
//         type="text"
//         value={employee.name}
//         onChange={(event) =>
//           setEmployee({
//             ...employee,
//             name: event.target.value
//           })
//         }
//         placeholder="Enter Employee Name"
//       />

//       <h2>Employee Name: {employee.name}</h2>

//       <hr />

//       {/* Department */}

//       <input
//         type="text"
//         value={employee.department}
//         onChange={(event) =>
//           setEmployee({
//             ...employee,
//             department: event.target.value
//           })
//         }
//         placeholder="Enter Department"
//       />

//       <h2>Department: {employee.department}</h2>

//       <hr />

//       {/* Experience */}

//       <input
//         type="text"
//         value={employee.experience}
//         onChange={(event) =>
//           setEmployee({
//             ...employee,
//             experience: event.target.value
//           })
//         }
//         placeholder="Enter Experience"
//       />

//       <h2>Experience: {employee.experience}</h2>

//       <hr />

//       {/* Salary */}

//       <input
//         type="text"
//         value={employee.salary}
//         onChange={(event) =>
//           setEmployee({
//             ...employee,
//             salary: event.target.value
//           })
//         }
//         placeholder="Enter Salary"
//       />

//       <h2>Salary: ₹{employee.salary}</h2>

//     </main>
//   );
// }

// export default Dashboard;
  

//MAP

// const employees = [
//   {
//     id: 1,
//     name: "Deepthi",
//     department: "Frontend"
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     department: "Backend"
//   },
//   {
//     id: 3,
//     name: "Priya",
//     department: "Testing"
//   }
// ];

// function Dashboard() {
//   return (
//     <main>
//       <h1>Employees</h1>

//       {employees.map((employee) => (
//         <h2 key={employee.id}>
//           {employee.name.department}
//         </h2>
//       ))}
//     </main>
//   );
// }

// export default Dashboard;
///////////////////////////////////////////////////////////////////////

//USE EFFECT AND USE STATE TOGETHER

// import { useState, useEffect } from "react";

// function Dashboard() {

//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log("Name changed:", name);
//   }, [name]);

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter employee name"
//       />

//       <h2>Employee Name: {name}</h2>

//     </main>
//   );
// }

// export default Dashboard;

////////////////////////////////////////////////////////////
// FAKE API RESPONSE

// import { useState, useEffect } from "react";

// function Dashboard() {

//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {

//     const employeeData = [
//       {
//         id: 1,
//         name: "Deepthi",
//         department: "Frontend"
//       },
//       {
//         id: 2,
//         name: "Rahul",
//         department: "Backend"
//       },
//       {
//         id: 3,
//         name: "Srujan",
//         department: "Testing"
//       }
//     ];

//     setEmployees(employeeData);

//   }, []);

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       {employees.length > 0 && (
//         <h2>
//           Total Employees: {employees.length}
//         </h2>
//       )}

//       {employees.map((employee) => (
//         <div key={employee.id}>

//           <h3>{employee.name}</h3>

//           <p>{employee.department}</p>

//         </div>
//       ))}

//     </main>
//   );
// }

// export default Dashboard;
//////////////////////////////////////////////////////////////////////

//WITH FETCH FUNCTION

// import { useState, useEffect } from "react";

// function Dashboard() {

//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setEmployees(data);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });

//   }, []);

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       {employees.length > 0 && (
//         <h2>
//           Total Employees: {employees.length}
//         </h2>
//       )}

//       {employees.map((employee) => (
//         <div key={employee.id}>

//           <h3>{employee.name}</h3>

//           <p>{employee.email}</p>

//         </div>
//       ))}

//     </main>
//   );
// }

// export default Dashboard;
///////////////////////////////////////////////////////////////////////////////////////////////////////

//FETCH WITH ASYNC AND AWAIT INSTEAD OF .THEN

// import { useEffect, useState } from "react";

// function Dashboard() {

//    const [employees , setEmployees]= useState([]);

//    useEffect(()=>{

//     const fetchEmployees = async()=>{
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       const data = await response.json();
//       setEmployees(data);

//     };
//     fetchEmployees();
//    },[]);

//    return(
//     <main>
//       <h1>Employee Management System</h1>

//       {employees.length>0 &&(
//         <h2>
//           Total Employees :{employees.length}
//         </h2>
//       )}
    
//     {employees.map((employee)=>(
//       <div key ={employee.id}>
//         <h3>{employee.name}</h3>
//         <p>{employee.email}</p>

//       </div>
//     ))}



//     </main>
//    );
// }

// export default Dashboard;
////////////////////////////////////////////////////////////////////////////////////////
//WITH ADDING LOADING AND ERROR EXTRA FEATURE

// import { useState, useEffect } from "react";

// function Dashboard() {

//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {

//     const fetchEmployees = async () => {

//       try {

//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch employees");
//         }

//         const data = await response.json();

//         setEmployees(data);

//       } catch (error) {

//         setError(error.message);

//       } finally {

//         setLoading(false);

//       }
//     };

//     fetchEmployees();

//   }, []);

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       {loading && (
//         <h2>Loading employees...</h2>
//       )}

//       {error && (
//         <h2>{error}</h2>
//       )}

//       {!loading && !error && (
//         <>
//           <h2>
//             Total Employees: {employees.length}
//           </h2>

//           {employees.map((employee) => (
//             <div key={employee.id}>

//               <h3>{employee.name}</h3>

//               <p>{employee.email}</p>

//             </div>
//           ))}
//         </>
//       )}

//     </main>
//   );
// }

// export default Dashboard;

/////////////////////////////////////////////////////////////////
//REPLACE THE API PART WITH THIS
// import { useEmployee } from "../context/EmployeeContext";
// import { useState, useEffect } from "react";
// import { getEmployees } from "../services/employeeService";

// function Dashboard() {

//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const { currentUser } = useEmployee();

//   useEffect(() => {

//     const fetchEmployees = async () => {

//       try {

//         const data = await getEmployees();

//         setEmployees(data);

//       } catch (error) {

//         setError(error.message);

//       } finally {

//         setLoading(false);

//       }

//     };

//     fetchEmployees();

//   }, []);

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       {loading && (
//         <h2>Loading employees...</h2>
//       )}

//       {error && (
//         <h2>{error}</h2>
//       )}

//       {!loading && !error && (
//         <>
//           <h2>
//             Total Employees: {employees.length}
//           </h2>

//           {employees.map((employee) => (
//             <div key={employee.id}>

//               <h3>{employee.name}</h3>

//               <p>{employee.email}</p>

//             </div>
//           ))}
//         </>
//       )}

//     </main>
//   );
// }

// export default Dashboard;


//  CONTEXT API

// import { useEmployee } from "../context/EmployeeContext";

// function Dashboard() {

//   const { currentUser } = useEmployee();

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       <h2>
//         Welcome, {currentUser.name}
//       </h2>

//       <p>
//         Role: {currentUser.role}
//       </p>

//     </main>
//   );
// }

// export default Dashboard;


import { useSelector } from "react-redux";

function Dashboard() {
  const employees = useSelector(
    (state) => state.employees.employees
  );

  // Total employees
  const totalEmployees = employees.length;

  // Unique departments
  const departments = [
    ...new Set(
      employees.map((employee) => employee.department)
    ),
  ];

  // Total salary
  const totalSalary = employees.reduce(
    (total, employee) =>
      total + Number(employee.salary || 0),
    0
  );

  // Average experience
  const totalExperience = employees.reduce(
    (total, employee) =>
      total + Number(employee.experience || 0),
    0
  );

  const averageExperience =
    totalEmployees > 0
      ? (totalExperience / totalEmployees).toFixed(1)
      : 0;

  return (
    <div className="dashboard">

      {/* Dashboard Header */}

      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome to Employee Management System
          </p>
        </div>
      </div>

      {/* Statistics Cards */}

      <div className="dashboard-cards">

        {/* Total Employees */}

        <div className="dashboard-card">
          <div className="card-icon">
            👥
          </div>

          <div>
            <p>Total Employees</p>
            <h2>{totalEmployees}</h2>
          </div>
        </div>

        {/* Departments */}

        <div className="dashboard-card">
          <div className="card-icon">
            🏢
          </div>

          <div>
            <p>Departments</p>
            <h2>{departments.length}</h2>
          </div>
        </div>

        {/* Total Salary */}

        <div className="dashboard-card">
          <div className="card-icon">
            💰
          </div>

          <div>
            <p>Total Salary</p>
            <h2>₹{totalSalary}</h2>
          </div>
        </div>

        {/* Average Experience */}

        <div className="dashboard-card">
          <div className="card-icon">
            ⭐
          </div>

          <div>
            <p>Avg. Experience</p>
            <h2>{averageExperience} Years</h2>
          </div>
        </div>

      </div>

      {/* Recent Employees */}

      <div className="recent-employees">

        <h2>Recent Employees</h2>

        {employees.length === 0 ? (
          <p>No employees available.</p>
        ) : (
          <div className="employee-table">

            <div className="table-header">
              <span>Name</span>
              <span>Department</span>
              <span>Experience</span>
              <span>Salary</span>
            </div>

            {employees.slice(0, 5).map((employee) => (
              <div
                className="table-row"
                key={employee.id}
              >
                <span>{employee.name}</span>

                <span>{employee.department}</span>

                <span>
                  {employee.experience} years
                </span>

                <span>
                  ₹{employee.salary}
                </span>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;




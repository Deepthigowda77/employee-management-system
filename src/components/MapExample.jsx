// function MapExample() {
// const employees = [
//     "deepthi",
//     "Goutam",
//     "kalyani"
// ];

// employees.map((employee)=>{
//     console.log(employee);
// });

// return(
//     <h1>open Browser Console</h1>
// );

    
// }
// export default MapExample;      THIS OUTPUT ONLY DISPLAYS IN CONSOLE 

 //function MapExample() {
    // const employees =[
    //     "deepthi",
    //     "rahul",
    //     "sanju"
    // ];

    // return(
    //     <div>
    //         <h1>employee list</h1>
    //         {employees.map((employee)=>(
    //             <h2>{employee}</h2>
    //         )
            
    //         )}
    //     </div>
    // )




// function MapExample() {
//     const employees = [{
//         id:1,
//         name:"deepthi",
//         department:"developer"
//         },
//         {
//         id:2,
//         name:"rahul",
//         department:"developer"
//         },
//         {
//         id:3,
//         name:"srujan",
//         department:"developer"
//         }



//     ];
// return(
//     <main>
//         <h1>Employee list</h1>
//           {employees.map((whataveruwant) => (
//   <div>
//     <h2>{whataveruwant.name}</h2>
//     <p>{whataveruwant.department}</p>
//   </div>
// ))}
//     </main>
// );





// }
 

// export default MapExample;












//BY USING KEY 

// function MapExample() {

//   const employees = [
//     {
//       id: 1,
//       name: "Deepthi",
//       department: "Developer"
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       department: "Developer"
//     },
//     {
//       id: 3,
//       name: "Srujan",
//       department: "Developer"
//     },
//     {
//       id: 4,
//       name: "Anjali",
//       department: "Developer"
//     },
//     {
//       id: 5,
//       name: "Priya",
//       department: "Testing",
//       salary:50000
//     }
//   ];

//   return (
//     <main>

//       <h1>Employee List</h1>

//       {employees.map((employee) => (
//         <div key={employee.id}>
//           <h2>{employee.name}</h2>
//           <p>{employee.department}</p>
//           <p>Salary:${employee.salary}</p>
//         </div>
//       ))}

//     </main>
//   );
// }

// export default MapExample;

////////////////////////////////////////////////////

//REACT CONDITIONAL RENDERING

// function EmployeeList() {

//   const employees = [
//     {
//       id: 1,
//       name: "Deepthi",
//       department: "Developer"
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       department: "Developer"
//     }
//   ];

//   return (
//     <main>

//       <h1>Employee List</h1>

//       {employees.length > 0 ? (
//         <div>
//           <h2>Employees Found</h2>

//           {employees.map((employee) => (
//             <div key={employee.id}>
//               <h3>{employee.name}</h3>
//               <p>{employee.department}</p>
//             </div>
//           ))}

//         </div>
//       ) : (
//         <h2>No Employees Found</h2>
//       )}

//     </main>
//   );
// }

// export default EmployeeList;
////////////////////////////////////////////////////////////////////////////////////////////

// && Conditional Rendering

// function EmployeeList() {

//   const employees = [
//     {
//       id: 1,
//       name: "Deepthi",
//       department: "Developer"
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       department: "Backend"
//     }, 
//     {
//       id: 3,
//       name: "Ragahv",
//       department: "Backend"
//     }
//   ];

//   return (
//     <main>

//       <h1>Employee Management System</h1>

//       {employees.length > 0 && (
//         <h2>Total employees are available : {employees.length}</h2>
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

// export default EmployeeList;
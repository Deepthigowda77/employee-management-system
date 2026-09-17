// export async function getEmployees(){

//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );


//     if (!response.ok){
//         throw new Error("Failed to fetch employees");
//     }

//     const data = await response.json();

//     return data;
// }

import api from "./api";

export const getEmployees = () => {
  return api.get("/employees");
};

export const createEmployee = (employeeData) => {
  return api.post("/employees", employeeData);
};

export const updateEmployee = (employeeId, employeeData) => {
  return api.put(`/employees/${employeeId}`, employeeData);
};

export const deleteEmployee = (employeeId) => {
  return api.delete(`/employees/${employeeId}`);
};
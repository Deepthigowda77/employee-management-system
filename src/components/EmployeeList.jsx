import PerformanceEmployeeCard from "./PerformanceEmployeeCard";

const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    experience: 3
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    experience: 4
  },
  {
    id: 3,
    name: "John",
    department: "Finance",
    experience: 2
  }
];

function EmployeeList({ onDelete }) {

  console.log("EmployeeList rendered");

  return (
    <div>

      <h2>Employee List</h2>

      {employees.map((employee) => (
        <PerformanceEmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default EmployeeList;
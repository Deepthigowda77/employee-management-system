import React from "react";

function PerformanceEmployeeCard({ employee }) {

  console.log(
    "PerformanceEmployeeCard rendered:",
    employee.name
  );

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Department: {employee.department}</p>
    </div>
  );
}

export default React.memo(PerformanceEmployeeCard);
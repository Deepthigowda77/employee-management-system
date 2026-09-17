import { useMemo, useState } from "react";
import PerformanceEmployeeCard from "./PerformanceEmployeeCard";

function PerformanceExample() {

  const [count, setCount] = useState(0);

  console.log("PerformanceExample rendered");

 const employee = useMemo(() => ({
  name: "Rahul",
  department: "IT"
}), []);

  return (
    <div>

      <h1>Performance Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <PerformanceEmployeeCard
        employee={employee}
      />

    </div>
  );
}

export default PerformanceExample;
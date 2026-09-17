import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <EmployeeCard
        name="Deepthi"
        department="Frontend"
      />
    </div>
  );
}

export default Counter;
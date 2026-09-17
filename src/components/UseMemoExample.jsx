import { useMemo, useState } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const employees = [
    "Deepthi",
    "Rahul",
    "Srujan",
    "Anu",
    "Priya"
  ];

  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees...");

    return employees.filter((employee) =>
      employee.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>

      <h1>useMemo Example</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <br />
      <br />

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search employee"
      />

      <h2>Employees</h2>

      {filteredEmployees.map((employee) => (
        <p key={employee}>
          {employee}
        </p>
      ))}

    </div>
  );
}

export default UseMemoExample;
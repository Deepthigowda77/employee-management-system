import { useEffect, useRef } from "react";

function UseRefExample() {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main>

      <h1>useRef Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter employee name"
      />

    </main>
  );
}

export default UseRefExample;
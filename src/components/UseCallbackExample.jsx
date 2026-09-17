import React, { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <ChildButton onClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;
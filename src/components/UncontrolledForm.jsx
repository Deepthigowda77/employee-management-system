import { useRef } from "react";

function UncontrolledForm() {

  const nameRef = useRef();

  function handleSubmit(event) {

    event.preventDefault();

    alert(nameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>

      <h1>Uncontrolled Form</h1>

      <input
        type="text"
        ref={nameRef}
        placeholder="Enter employee name"
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}

export default UncontrolledForm;
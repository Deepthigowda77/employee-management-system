import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {

  const [currentUser, setCurrentUser] = useState({
    name: "Deepthi",
    role: "Admin"
  });

  return (
    <EmployeeContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployee() {
  return useContext(EmployeeContext);
}
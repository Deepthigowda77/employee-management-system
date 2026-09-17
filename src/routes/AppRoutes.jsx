import { Navigate, Route, Routes } from "react-router-dom";

import Profile from "../pages/profile";
import Settings from "../pages/Settings";
import EmployeeDetail from "../pages/EmployeeDetail";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../components/Dashboard";
import Employees from "../pages/Employees";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../components/Login";

function AppRoutes() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Default route */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* Main Application Layout */}

 <Route
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Employees */}
 <Route
  path="/employees"
  element={<Employees />}
/>

        {/* Add Employee */}
        <Route
          path="/employees/add"
          element={<AddEmployee />}
        />

        {/* Edit Employee */}
        <Route
          path="/employees/edit/:id"
          element={<EditEmployee />}
        />

        {/* Employee Details */}
        <Route
          path="/employees/:id"
          element={<EmployeeDetail />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;
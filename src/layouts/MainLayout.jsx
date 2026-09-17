import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="app-layout">

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="main-layout">

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default MainLayout;
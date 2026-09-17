import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-title">
        MENU
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu">

        <li>
          <NavLink to="/dashboard">
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/employees">
            👥 Employees
          </NavLink>
        </li>

        <li>
          <NavLink to="/employees/add">
            ➕ Add Employee
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            👤 Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            ⚙️ Settings
          </NavLink>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;
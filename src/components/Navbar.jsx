import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo / Application Name */}
      <div className="navbar-brand">
        <Link to="/dashboard">
          Employee Management System
        </Link>
      </div>

      {/* Navbar Right Side */}
      <div className="navbar-right">
        <span className="notification">🔔</span>

        <Link to="/profile" className="profile-link">
          👤 Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
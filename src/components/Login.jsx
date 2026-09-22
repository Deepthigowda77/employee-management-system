import { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        }
      );

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setMessage("Login successful!");

      window.location.href = "/employees";
    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="login-page">

      {/* Left Side */}
      <div className="login-left">

        <div className="brand">
          <div className="brand-icon">EM</div>

          <h1>Employee<span>Hub</span></h1>
        </div>

        <div className="welcome-content">
          <h2>
            Manage your team
            <br />
            <span>with confidence.</span>
          </h2>

          <p>
            A simple and powerful employee management
            system to organize your workforce efficiently.
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Employee Management</strong>
                <p>Manage employee information easily.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Secure Access</strong>
                <p>JWT-based authentication keeps your data secure.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Easy to Use</strong>
                <p>Clean and simple management experience.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="login-footer">
          © 2026 EmployeeHub. All rights reserved.
        </div>

      </div>


      {/* Right Side */}
      <div className="login-right">

        <div className="login-card">

          <div className="mobile-logo">
            <div className="brand-icon">EM</div>
            <h1>Employee<span>Hub</span></h1>
          </div>

          <div className="login-heading">
            <h2>Welcome back 👋</h2>

            <p>
              Sign in to continue to your dashboard
            </p>
          </div>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>


            <div className="input-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">
                <span className="input-icon">🔒</span>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>


            <button
              type="submit"
              className="login-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          {message && (
            <div
              className={
                message.includes("successful")
                  ? "login-message success"
                  : "login-message error"
              }
            >
              {message}
            </div>
          )}


          <div className="demo-info">
            <span>Demo account</span>

            <p>
              <strong>Email:</strong> deepthi@gmail.com
            </p>

            <p>
              <strong>Password:</strong> 123456
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
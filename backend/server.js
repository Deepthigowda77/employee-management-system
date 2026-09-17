const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const db = require("./config/db");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {
  res.send("Employee Management Backend is running!");
});

// ========================================
// GET ALL EMPLOYEES
// ========================================

app.get("/api/employees", authMiddleware, (req, res) => {
  const sql = "SELECT * FROM employees";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching employees:", err);

      return res.status(500).json({
        message: "Failed to fetch employees",
      });
    }

    res.json(results);
  });
});

// ========================================
// GET EMPLOYEE BY ID
// ========================================

app.get("/api/employees/:id", authMiddleware, (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM employees WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error fetching employee:", err);

      return res.status(500).json({
        message: "Failed to fetch employee",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(results[0]);
  });
});

// ========================================
// POST - ADD EMPLOYEE
// ========================================

app.post("/api/employees", authMiddleware, (req, res) => {
  const { name, department, experience, salary } = req.body;

  // Validate employee name
  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Employee name is required.",
    });
  }

  // Validate department
  if (!department || department.trim() === "") {
    return res.status(400).json({
      message: "Department is required.",
    });
  }

  // Validate experience
  if (
    experience === undefined ||
    experience === null ||
    experience < 0
  ) {
    return res.status(400).json({
      message: "Experience must be a valid number.",
    });
  }

  // Validate salary
  if (
    salary === undefined ||
    salary === null ||
    salary < 0
  ) {
    return res.status(400).json({
      message: "Salary must be a valid number.",
    });
  }

  // SQL query
  const sql = `
    INSERT INTO employees
    (name, department, experience, salary)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name.trim(), department.trim(), experience, salary],
    (err, result) => {
      if (err) {
        console.error("Error adding employee:", err);

        return res.status(500).json({
          message: "Failed to add employee.",
          error: err.message,
        });
      }

      res.status(201).json({
        message: "Employee added successfully!",
        employeeId: result.insertId,
      });
    }
  );
});

// ========================================
// PUT - UPDATE EMPLOYEE
// ========================================

app.put("/api/employees/:id", authMiddleware, (req, res) => {
  const { id } = req.params;

  const {
    name,
    department,
    experience,
    salary,
  } = req.body;

  // Validation
  if (!name || !department) {
    return res.status(400).json({
      message: "Name and department are required",
    });
  }

  if (experience < 0 || salary < 0) {
    return res.status(400).json({
      message: "Experience and salary cannot be negative",
    });
  }

  const sql = `
    UPDATE employees
    SET
      name = ?,
      department = ?,
      experience = ?,
      salary = ?
    WHERE id = ?
  `;

  const values = [
    name,
    department,
    experience,
    salary,
    id,
  ];

  db.query(sql, values, (err, result) => {
  if (err) {
    console.error("Error updating employee:", err);

    return res.status(500).json({
      message: "Failed to update employee",
      error: err.message,
    });
  }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json({
      message: "Employee updated successfully",
    });
  });
});

// ========================================
// DELETE - DELETE EMPLOYEE
// ========================================

app.delete(
  "/api/employees/:id",
  authMiddleware,
  adminMiddleware,
  (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM employees WHERE id = ?";

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Error deleting employee:", err);

        return res.status(500).json({
          message: "Failed to delete employee",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Employee not found",
        });
      }

      res.json({
        message: "Employee deleted successfully",
      });
    });
  }
);

// ========================================
// JWT LOGIN API
// ========================================

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Check required fields
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  // Find user by email
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Login error:", err);

      return res.status(500).json({
        message: "Login failed",
      });
    }

    // User not found
    if (results.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = results[0];

    // Check password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Send response
    res.json({
      message: "Login successful",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  });
});




// ========================================
// GLOBAL ERROR HANDLING


app.use((err, req, res, next) => {
  console.error("Global Error:", err);

  res.status(500).json({
    message: "Something went wrong on the server.",
  });
});
// ========================================

// ========================================
// START SERVER
// ========================================




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});
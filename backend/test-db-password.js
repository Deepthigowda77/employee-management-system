const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("Database connected successfully!");

  const sql = "SELECT email, password FROM users WHERE email = ?";

  db.query(sql, ["deepthi@gmail.com"], async (err, results) => {
    if (err) {
      console.error("Query failed:", err);
      return;
    }

    if (results.length === 0) {
      console.log("User not found!");
      return;
    }

    const user = results[0];

    console.log("Email:", user.email);
    console.log("Hash found:", user.password);

    const passwordMatch = await bcrypt.compare(
      "123456",
      user.password
    );

    console.log("Password 123456 matches:", passwordMatch);

    db.end();
  });
});
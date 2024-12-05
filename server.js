const express = require("express");
const { validateRegistration, validateLogin } = require("./validations/userValidation");

const app = express();
app.use(express.static("public"));

const db = require("better-sqlite3")("ourApp.db");
db.pragma("journal_mode=WAL");

const createTables = db.transaction(() => {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username STRING TEXT NOT NULL UNIQUE,
      email STRING TEXT NOT NULL UNIQUE,
      password_hash STRING TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `),run();
});

createTables();

app.use(function (req, res, next) {
  res.locals.errors = [];
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/login", (req, res) => {
  res.render("login_page");
});

app.get("/register", (req, res) => {
  res.render("homepage");
});

app.post("/register", (req, res) => {
  const { isValid, errors, sanitizedData } = validateRegistration(req.body);

  if (!isValid) {
    res.render("homepage", { errors });
    return;
  }

  // TODO: Save the user to the database
  res.send("Thanks for Registering with Us");
});

app.post("/login", (req, res) => {
  const { isValid, errors, sanitizedData } = validateLogin(req.body);

  if (!isValid) {
    res.render("login_page", { errors });
    return;
  }

  // TODO: Implement actual authentication
  // This is where you would:
  // 1. Check if user exists in database
  // 2. Verify password hash
  // 3. Create user session
  // 4. Redirect to dashboard

  res.send("Login successful! Welcome back.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

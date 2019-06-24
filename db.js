import Sequelize from "sequelize";
import employeeModel from "./src/employee/Employee";
import scheduleModel from "./src/schedule/Schedule";

require("dotenv").config();

// Setting up connection
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    }
  }
);

// Modeling the tables
const Employee = db.define("employee", employeeModel);
const Schedule = db.define("schedule", scheduleModel);

// Associations
Employee.hasMany(Schedule);

export default db;

import Sequelize from "sequelize";
import waiterModel from "./models/waiter";
import scheduleModel from "./models/schedule";

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
const Waiter = db.define("waiter", waiterModel);
const Schedule = db.define("schedule", scheduleModel);

// Associations
Waiter.hasMany(Schedule);

export default db;

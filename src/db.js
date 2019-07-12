import Sequelize from "sequelize";
import employeeModel from "./employee/Employee";
import scheduleModel from "./schedule/Schedule";
import attendanceControlModel from './attendance/Attendance';

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
const AttendanceControl = db.define("attendanceControl", attendanceControlModel)

// Associations
Employee.belongsToMany(Schedule, {through: AttendanceControl});
Schedule.belongsToMany(Employee, {through: AttendanceControl});

export default db;

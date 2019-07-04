"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Employee = _interopRequireDefault(require("./employee/Employee"));

var _Schedule = _interopRequireDefault(require("./schedule/Schedule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("dotenv").config(); // Setting up connection


var db = new _sequelize["default"](process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: true
  }
}); // Modeling the tables

var Employee = db.define("employee", _Employee["default"]);
var Schedule = db.define("schedule", _Schedule["default"]); // Associations

Employee.hasMany(Schedule);
var _default = db;
exports["default"] = _default;
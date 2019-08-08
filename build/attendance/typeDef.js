"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Attendance {\n    id: ID!\n    photo: String\n    latitude: Float\n    longitude: Float\n    start: DateTime\n    employee: Employee\n    schedule: Schedule\n    status: String\n  }\n\n  extend type Query {\n    attendances: [Attendance]!\n    attendance(scheduleId: ID!, employeeUser: String!): Attendance!\n  }\n\n  extend type Mutation {\n    deleteAttendance(scheduleId: ID!, employeeUser: String!): Attendance!\n    startAttendance(\n      scheduleId: ID!\n      employeeUser: String!\n      photo: String!\n      latitude: Float!\n      longitude: Float!\n      start: DateTime!\n      status: String!\n    ): Attendance!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var attendance = (0, _apolloServer.gql)(_templateObject());
var _default = attendance;
exports["default"] = _default;
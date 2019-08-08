"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

const attendance = _apolloServer.gql`
  type Attendance {
    id: ID!
    photo: String
    latitude: Float
    longitude: Float
    start: DateTime
    employee: Employee
    schedule: Schedule
    status: String
  }

  extend type Query {
    attendances: [Attendance]!
    attendance(scheduleId: ID!, employeeUser: String!): Attendance!
  }

  extend type Mutation {
    deleteAttendance(scheduleId: ID!, employeeUser: String!): Attendance!
    startAttendance(
      scheduleId: ID!
      employeeUser: String!
      photo: String!
      latitude: Float!
      longitude: Float!
      start: DateTime!
      status: String!
    ): Attendance!
  }
`;
var _default = attendance;
exports.default = _default;
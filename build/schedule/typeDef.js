"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

const schedule = _apolloServer.gql`
  
  type Schedule {
    id: ID!
    tagName: String!
    start: DateTime!
    end: DateTime!
    status: String!
    employees: [Employee]
    deletedAt: DateTime
  }

  extend type Query {
    schedules: [Schedule!]!
    schedule(id: ID!): Schedule
  }

  extend type Mutation {
    createSchedule(
      tagName: String
      start: DateTime
      end: DateTime
      status: String
    ): Schedule!
    updateSchedule(
      id: ID!
      tagName: String
      start: DateTime
      end: DateTime
      status: String
    ): Schedule!
    deleteSchedule( id: ID! ): Schedule
    addEmployeeToSchedule(
      scheduleId: ID!
      employeeUser: String!
    ) : Schedule
    removeEmployeeToSchedule(
      scheduleId: ID!
      employeeUser: String!
    ) : Schedule!
  }
`;
var _default = schedule;
exports.default = _default;
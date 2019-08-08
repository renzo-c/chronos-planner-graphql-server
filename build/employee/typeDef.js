"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

const employee = _apolloServer.gql`

    type Employee {
        id: ID,
        firstName: String!,
        lastName: String!,
        user: String!,
        password: String!,
        dni: String!,
        address: String!,
        phone: String!,
        email: String!,
        status: String
        schedules: [Schedule],
        createdAt: DateTime!,
        deletedAt: DateTime
    }

    extend type Query {
        employees: [Employee!]!,
        employee(user: String!): Employee,
        employeeLogin(user: String, password: String): Employee,
        employeeSchedules(user: String): Employee
    }

    extend type Mutation {
        createEmployee(
            firstName: String!,
            lastName: String!,
            user: String!,
            password: String!,
            dni: String!,
            address: String!,
            phone: String!,
            email: String!,
            status: String
        ): Employee!
        updateEmployee(
            firstName: String,
            lastName: String,
            user: String!,
            password: String,
            dni: String,
            address: String,
            phone: String,
            email: String,
            status: String
        ): Employee!
        deleteEmployee( user: String! ): Employee
    }
`;
var _default = employee;
exports.default = _default;
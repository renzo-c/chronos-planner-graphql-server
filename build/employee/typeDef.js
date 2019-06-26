"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    type Employee {\n        id: ID!,\n        firstName: String!,\n        lastName: String!,\n        user: String!,\n        password: String!,\n        dni: Int!,\n        address: String!,\n        phone: String!,\n        email: String!,\n        createdAt: DateTime!,\n        deletedAt: DateTime\n    }\n\n    extend type Query {\n        employees: [Employee!]!,\n        employee(id: ID!): Employee\n    }\n\n    extend type Mutation {\n        createEmployee(\n            firstName: String!,\n            lastName: String!,\n            user: String!,\n            password: String!,\n            dni: Int!,\n            address: String!,\n            phone: String!,\n            email: String!,\n        ): Employee!\n        updateEmployee(\n            id: ID!,\n            firstName: String,\n            lastName: String,\n            user: String,\n            password: String,\n            dni: Int,\n            address: String,\n            phone: String,\n            email: String,\n        ): Employee!\n        deleteEmployee( id: ID! ): Employee\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var employee = (0, _apolloServer.gql)(_templateObject());
var _default = employee;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _apolloServer = require("apollo-server");

var _typeDef = _interopRequireDefault(require("./employee/typeDef"));

var _typeDef2 = _interopRequireDefault(require("./schedule/typeDef"));

var _typeDef3 = _interopRequireDefault(require("./attendance/typeDef"));

var _resolvers = _interopRequireDefault(require("./employee/resolvers"));

var _resolvers2 = _interopRequireDefault(require("./schedule/resolvers"));

var _resolvers3 = _interopRequireDefault(require("./attendance/resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//dummy query and mutation because graphql does not accept empty types
const root = _apolloServer.gql`
  scalar DateTime

  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;
const typeDefs = [root, _typeDef.default, _typeDef2.default, _typeDef3.default];
exports.typeDefs = typeDefs;
const resolvers = {
  Query: Object.assign({}, _resolvers.default.Query, _resolvers2.default.Query, _resolvers3.default.Query),
  Mutation: Object.assign({}, _resolvers.default.Mutation, _resolvers2.default.Mutation, _resolvers3.default.Mutation),
  Schedule: Object.assign({}, _resolvers2.default.Schedule),
  Attendance: Object.assign({}, _resolvers3.default.Attendance),
  Employee: Object.assign({}, _resolvers.default.Employee)
};
exports.resolvers = resolvers;
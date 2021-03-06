import { gql } from "apollo-server";
import employee from "./employee/typeDef";
import schedule from "./schedule/typeDef";
import attendance from "./attendance/typeDef";
import employeeResolvers from "./employee/resolvers";
import scheduleResolvers from "./schedule/resolvers";
import attendanceResolvers from "./attendance/resolvers";

//dummy query and mutation because graphql does not accept empty types
const root = gql`
  scalar DateTime

  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

export const typeDefs = [root, employee, schedule, attendance];

export const resolvers = {
  Query: Object.assign(
    {},
    employeeResolvers.Query,
    scheduleResolvers.Query,
    attendanceResolvers.Query
  ),
  Mutation: Object.assign(
    {},
    employeeResolvers.Mutation,
    scheduleResolvers.Mutation,
    attendanceResolvers.Mutation
  ),
  Schedule: Object.assign({}, scheduleResolvers.Schedule),
  Attendance: Object.assign({}, attendanceResolvers.Attendance),
  Employee: Object.assign({}, employeeResolvers.Employee)
};

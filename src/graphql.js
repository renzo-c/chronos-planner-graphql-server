import { gql } from "apollo-server";
import employee from "./employee/typeDef";
import schedule from "./schedule/typeDef";
import employeeResolvers from "./employee/resolvers";
import scheduleResolvers from "./schedule/resolvers";

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

export const typeDefs = [root, employee, schedule];

export const resolvers = {
  Query: Object.assign({}, employeeResolvers.Query, scheduleResolvers.Query),
  Mutation: Object.assign(
    {},
    employeeResolvers.Mutation,
    scheduleResolvers.Mutation
  ),
  Schedule: Object.assign({}, scheduleResolvers.Schedule)
};

import { gql } from "apollo-server";

const schedule = gql`
  
  type Schedule {
    id: ID!
    tagName: String!
    start: DateTime!
    end: DateTime!
    status: String!
    employee: [Employee]
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
    ) : Attendance!
    removeEmployeeToSchedule(
      scheduleId: ID!
      employeeUser: String!
    ) : Schedule!
  }
`;

export default schedule;
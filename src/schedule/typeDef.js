import { gql } from "apollo-server";

const schedule = gql`
  
  type Schedule {
    id: ID!
    tagName: String
    start: DateTime
    end: DateTime
    active: String
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
      active: String
    ): Schedule!
    updateSchedule(
      id: ID!
      tagName: String
      start: DateTime
      end: DateTime
      active: String
    ): Schedule!
    deleteSchedule( id: ID! ): Schedule
  }
`;

export default schedule;
import { gql } from "apollo-server";

const attendance = gql`
  type Attendance {
    id: ID!
    photo: String
    latitude: Float
    longitude: Float
    start: DateTime
    employee: Employee
    schedule: Schedule
  }

  extend type Query {
    attendances: [Attendance]!
    attendance(scheduleId: ID!, employeeUser: String!): Attendance!
  }

  extend type Mutation {
    deleteAttendance(scheduleId: ID!, employeeUser: String!): Attendance!
  }
`;

export default attendance;

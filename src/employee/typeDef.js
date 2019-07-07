import { gql } from "apollo-server";

const employee = gql`

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
        createdAt: DateTime!,
        deletedAt: DateTime
    }

    extend type Query {
        employees: [Employee!]!,
        employee(id: ID!): Employee
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
            id: ID,
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

export default employee;
export default `

    scalar DateTime

    type Employee {
        id: ID!,
        firstName: String!,
        lastName: String!,
        user: String!,
        password: String!,
        dni: Int!,
        address: String!,
        phone: String!,
        email: String!,
        createdAt: DateTime!,
        deletedAt: DateTime
    }

    type Query {
        employees: [Employee!]!,
        employee(id: ID!): Employee
    }

    type Mutation {
        createEmployee(
            firstName: String!,
            lastName: String!,
            user: String!,
            password: String!,
            dni: Int!,
            address: String!,
            phone: String!,
            email: String!,
        ): Employee!
        updateEmployee(
            id: ID!,
            firstName: String,
            lastName: String,
            user: String,
            password: String,
            dni: Int,
            address: String,
            phone: String,
            email: String,
        ): Employee!
        deleteEmployee( id: ID! ): Employee
    }
`;

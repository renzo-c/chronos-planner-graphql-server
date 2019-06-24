export default `

    scalar DateTime

    type Waiter {
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
        waiters: [Waiter!]!,
        waiter(id: ID!): Waiter 
    }

    type Mutation {
        createWaiter(
            firstName: String!,
            lastName: String!,
            user: String!,
            password: String!,
            dni: Int!,
            address: String!,
            phone: String!,
            email: String!,
        ): Waiter!
    }
`;

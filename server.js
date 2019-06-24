// import { ApolloServer, gql } from "apollo-server";
import db from './orm';
// import typeDefs from './graphql/schema';
// import resolvers from './graphql/resolvers';

// const server = new ApolloServer({
//   typeDefs: gql(typeDefs),
//   resolvers,
//   context: { db }
// });

// Synchronizing the models with the database
db.sync({force: false}).then(() => {});

// server.listen({port: 3000}).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`)
//   });

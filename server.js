import { ApolloServer, gql } from "apollo-server";
import db from './db';
import typeDefs from './src/employee/typeDef';
import resolvers from './src/employee/resolvers';

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

// Synchronizing the models with the database
db.sync({force: false}).then(() => {});

server.listen({port: 3000}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });

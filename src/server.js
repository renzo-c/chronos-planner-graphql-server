import { ApolloServer } from "apollo-server";
import db from './db';
import { typeDefs, resolvers } from './graphql';

require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db },
  playground: true,
  introspection: true
});

// Synchronizing the models with the database
db.sync({force: true}).then(() => {});

server.listen({ port: process.env.PORT || 4005 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });

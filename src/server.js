import { ApolloServer } from "apollo-server";
import db from './db';
import { typeDefs, resolvers } from './graphql';

require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

// Synchronizing the models with the database
db.sync({force: false}).then(() => {});

server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });

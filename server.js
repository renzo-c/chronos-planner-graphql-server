import { ApolloServer } from "apollo-server";
import db from './db';
import { typeDefs, resolvers } from './graphql';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

// Synchronizing the models with the database
db.sync({force: false}).then(() => {});

server.listen({port: 3000}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });

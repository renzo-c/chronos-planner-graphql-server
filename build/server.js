"use strict";

var _apolloServer = require("apollo-server");

var _db = _interopRequireDefault(require("./db"));

var _graphql = require("./graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();

const server = new _apolloServer.ApolloServer({
  typeDefs: _graphql.typeDefs,
  resolvers: _graphql.resolvers,
  context: {
    db: _db.default
  },
  playground: true,
  introspection: true
}); // Synchronizing the models with the database

_db.default.sync({
  force: false
}).then(() => {});

server.listen({
  port: process.env.PORT || 4005
}).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
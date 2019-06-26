"use strict";

var _apolloServer = require("apollo-server");

var _db = _interopRequireDefault(require("./db"));

var _graphql = require("./graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("dotenv").config();

var server = new _apolloServer.ApolloServer({
  typeDefs: _graphql.typeDefs,
  resolvers: _graphql.resolvers,
  context: {
    db: _db["default"]
  }
}); // Synchronizing the models with the database

_db["default"].sync({
  force: false
}).then(function () {});

server.listen({
  port: process.env.PORT || 3000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80 Server ready at ".concat(url));
});
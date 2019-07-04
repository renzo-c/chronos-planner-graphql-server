"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _apolloServer = require("apollo-server");

var _typeDef = _interopRequireDefault(require("./employee/typeDef"));

var _typeDef2 = _interopRequireDefault(require("./schedule/typeDef"));

var _resolvers = _interopRequireDefault(require("./employee/resolvers"));

var _resolvers2 = _interopRequireDefault(require("./schedule/resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nscalar DateTime\n\ntype Query {\n    root: String\n}\ntype Mutation {\n    root: String\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//dummy query and mutation because graphql does not accept empty types
var root = (0, _apolloServer.gql)(_templateObject());
var typeDefs = [root, _typeDef["default"], _typeDef2["default"]];
exports.typeDefs = typeDefs;
var resolvers = {
  Query: Object.assign({}, _resolvers["default"].Query, _resolvers2["default"].Query),
  Mutation: Object.assign({}, _resolvers["default"].Mutation, _resolvers2["default"].Mutation)
};
exports.resolvers = resolvers;
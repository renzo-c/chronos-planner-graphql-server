"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  \n  type Schedule {\n    id: ID!\n    tagName: String!\n    start: DateTime!\n    end: DateTime!\n    status: String!\n    employees: [Employee]\n    deletedAt: DateTime\n  }\n\n  extend type Query {\n    schedules: [Schedule!]!\n    schedule(id: ID!): Schedule\n  }\n\n  extend type Mutation {\n    createSchedule(\n      tagName: String\n      start: DateTime\n      end: DateTime\n      status: String\n    ): Schedule!\n    updateSchedule(\n      id: ID!\n      tagName: String\n      start: DateTime\n      end: DateTime\n      status: String\n    ): Schedule!\n    deleteSchedule( id: ID! ): Schedule\n    addEmployeeToSchedule(\n      scheduleId: ID!\n      employeeUser: String!\n    ) : Schedule\n    removeEmployeeToSchedule(\n      scheduleId: ID!\n      employeeUser: String!\n    ) : Schedule!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var schedule = (0, _apolloServer.gql)(_templateObject());
var _default = schedule;
exports["default"] = _default;
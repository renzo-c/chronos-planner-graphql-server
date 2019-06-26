"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// import { GraphQLDateTime } from "graphql-iso-date";
var _default = {
  // DateTime: GraphQLDateTime, //pending point to check if it is used
  Query: {
    employees: function employees(parent, args, _ref, info) {
      var db = _ref.db;
      return db.models.employee.findAll();
    },
    employee: function employee(parent, _ref2, _ref3, info) {
      var id = _ref2.id;
      var db = _ref3.db;
      return db.models.employee.findByPk(id);
    }
  },
  Mutation: {
    createEmployee: function createEmployee(parent, args, _ref4, info) {
      var db = _ref4.db;
      return db.models.employee.create(args);
    },
    updateEmployee: function updateEmployee(parent, args, _ref5, info) {
      var db = _ref5.db;
      return db.models.employee.update(args, {
        where: {
          id: args.id
        },
        returning: true,
        plain: true
      }).then(function (test) {
        return test[1].dataValues;
      });
    },
    deleteEmployee: function deleteEmployee(parent, args, _ref6, info) {
      var db = _ref6.db;
      return db.models.employee.findByPk(args.id).then(function (employee) {
        db.models.employee.destroy({
          where: {
            id: args.id
          }
        });
        return employee;
      });
    }
  }
};
exports["default"] = _default;
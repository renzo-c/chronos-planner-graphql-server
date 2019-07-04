"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// import { GraphQLDateTime } from "graphql-iso-date";
var _default = {
  // DateTime: GraphQLDateTime, //pending point to check if it is used
  Query: {
    schedules: function schedules(parent, args, _ref, info) {
      var db = _ref.db;
      return db.models.schedule.findAll();
    },
    schedule: function schedule(parent, _ref2, _ref3, info) {
      var id = _ref2.id;
      var db = _ref3.db;
      return db.models.schedule.findByPk(id);
    }
  },
  Mutation: {
    createSchedule: function createSchedule(parent, args, _ref4, info) {
      var db = _ref4.db;
      return db.models.schedule.create(args);
    },
    updateSchedule: function updateSchedule(parent, args, _ref5, info) {
      var db = _ref5.db;
      return db.models.schedule.update(args, {
        where: {
          id: args.id
        },
        returning: true,
        plain: true
      }).then(function (schedule) {
        return schedule[1].dataValues;
      });
    },
    deleteSchedule: function deleteSchedule(parent, args, _ref6, info) {
      var db = _ref6.db;
      return db.models.schedule.findByPk(args.id).then(function (schedule) {
        db.models.schedule.destroy({
          where: {
            id: args.id
          }
        });
        return schedule;
      });
    }
  }
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  Schedule: {
    employees: function employees(parent, args, _ref, info) {
      var db = _ref.db;
      return parent.getEmployees();
    }
  },
  Query: {
    schedules: function schedules(parent, args, _ref2, info) {
      var db = _ref2.db;
      return db.models.schedule.findAll({
        include: [{
          model: db.models.employee
        }]
      }).then(function (result) {
        return result;
      });
    },
    schedule: function schedule(parent, _ref3, _ref4, info) {
      var id = _ref3.id;
      var db = _ref4.db;
      // db.models.schedule
      //   .findByPk(id)
      //   .then(result => console.log("result", Object.keys(result.__proto__)));
      return db.models.schedule.findByPk(id);
    }
  },
  Mutation: {
    createSchedule: function createSchedule(parent, args, _ref5, info) {
      var db = _ref5.db;
      return db.models.schedule.create(args);
    },
    updateSchedule: function updateSchedule(parent, args, _ref6, info) {
      var db = _ref6.db;
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
    deleteSchedule: function deleteSchedule(parent, args, _ref7, info) {
      var db = _ref7.db;
      return db.models.schedule.findByPk(args.id).then(function (schedule) {
        db.models.schedule.destroy({
          where: {
            id: args.id
          }
        });
        return schedule;
      });
    },
    addEmployeeToSchedule: function addEmployeeToSchedule(parent, _ref8, _ref9, info) {
      var scheduleId = _ref8.scheduleId,
          employeeUser = _ref8.employeeUser;
      var db = _ref9.db;
      db.models.attendance.destroy({
        where: {
          scheduleId: scheduleId
        }
      });
      return db.models.schedule.findOne({
        where: {
          id: scheduleId
        },
        include: {
          model: db.models.employee
        }
      }).then(function (result) {
        return result.addEmployee(employeeUser);
      }).then(function () {
        return db.models.schedule.findOne({
          where: {
            id: scheduleId
          }
        });
      }); // .then(() => {
      //   return db.models.attendance.findAll({
      //     where: { scheduleId, employeeUser }
      //   });
      // });
    },
    removeEmployeeToSchedule: function removeEmployeeToSchedule(parent, _ref10, _ref11, info) {
      var scheduleId = _ref10.scheduleId,
          employeeUser = _ref10.employeeUser;
      var db = _ref11.db;
      return db.models.schedule.findOne({
        where: {
          id: scheduleId
        },
        include: {
          model: db.models.employee
        }
      }) // .then(result => console.log("result", Object.keys(result.__proto__)));
      .then(function (result) {
        return result.removeEmployee(employeeUser);
      }).then(function () {
        return db.models.schedule.findOne({
          where: {
            id: scheduleId
          }
        });
      });
    }
  }
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  Attendance: {
    employee: function employee(parent, args, _ref, info) {
      var db = _ref.db;
      return db.models.employee.findByPk(parent.employeeUser);
    },
    schedule: function schedule(parent, args, _ref2, info) {
      var db = _ref2.db;
      return db.models.schedule.findByPk(parent.scheduleId);
    }
  },
  Query: {
    attendances: function attendances(parent, args, _ref3, info) {
      var db = _ref3.db;
      return db.models.attendance.findAll();
    },
    attendance: function attendance(parent, _ref4, _ref5, info) {
      var employeeUser = _ref4.employeeUser,
          scheduleId = _ref4.scheduleId;
      var db = _ref5.db;
      return db.models.attendance.findOne({
        where: {
          employeeUser: employeeUser,
          scheduleId: scheduleId
        }
      });
    }
  },
  Mutation: {
    deleteAttendance: function deleteAttendance(parent, _ref6, _ref7, info) {
      var employeeUser = _ref6.employeeUser,
          scheduleId = _ref6.scheduleId;
      var db = _ref7.db;
      return db.models.attendance.findOne({
        where: {
          employeeUser: employeeUser,
          scheduleId: scheduleId
        }
      }).then(function (attendance) {
        attendance.destroy();
        return attendance;
      });
    },
    startAttendance: function startAttendance(parent, args, _ref8, info) {
      var db = _ref8.db;
      console.log("args!!!", args);
      var employeeUser = args.employeeUser,
          scheduleId = args.scheduleId;
      return db.models.attendance.update(args, {
        where: {
          employeeUser: employeeUser,
          scheduleId: scheduleId
        },
        returning: true,
        plain: true
      }).then(function (result) {
        return result[1].dataValues;
      });
    }
  }
};
exports["default"] = _default;
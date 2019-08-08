"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  // DateTime: GraphQLDateTime, //pending point to check if it is used
  Employee: {
    schedules: function schedules(parent, args, _ref, info) {
      var db = _ref.db;
      return parent.getSchedules();
    }
  },
  Query: {
    employees: function employees(parent, args, _ref2, info) {
      var db = _ref2.db;
      return db.models.employee.findAll();
    },
    employee: function employee(parent, _ref3, _ref4, info) {
      var user = _ref3.user;
      var db = _ref4.db;
      // const test = db.models.employee
      //   .findByPk(user)
      //   .then(result => console.log("result", Object.keys(result.__proto__)));
      return db.models.employee.findByPk(user);
    },
    employeeLogin: function employeeLogin(parent, _ref5, _ref6, info) {
      var user = _ref5.user,
          password = _ref5.password;
      var db = _ref6.db;
      return db.models.employee.findOne({
        where: {
          user: user
        }
      }).then(function (employee) {
        if (employee && _bcrypt["default"].compareSync(password, employee.password)) {
          return employee;
        } else {
          return null;
        }
      });
    },
    employeeSchedules: function employeeSchedules(parent, _ref7, _ref8, info) {
      var user = _ref7.user;
      var db = _ref8.db;
      return db.models.employee.findOne({
        where: {
          user: user
        }
      });
    }
  },
  Mutation: {
    createEmployee: function () {
      var _createEmployee = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(parent, args, _ref9, info) {
        var db, _args, password, rest, saltRounds, hashedPassword, newArgs;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = _ref9.db;
                _args = _objectSpread({}, args), password = _args.password, rest = _objectWithoutProperties(_args, ["password"]);
                saltRounds = 10;
                _context.next = 5;
                return new Promise(function (resolve, reject) {
                  _bcrypt["default"].hash(password, saltRounds, function (err, hash) {
                    if (err) {
                      reject(err);
                    }

                    resolve(hash);
                  });
                });

              case 5:
                hashedPassword = _context.sent;
                newArgs = _objectSpread({}, rest, {
                  password: hashedPassword
                });
                return _context.abrupt("return", db.models.employee.create(newArgs));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createEmployee(_x, _x2, _x3, _x4) {
        return _createEmployee.apply(this, arguments);
      }

      return createEmployee;
    }(),
    updateEmployee: function () {
      var _updateEmployee = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(parent, args, _ref10, info) {
        var db, _args3, password, rest, saltRounds, hashedPassword, newArgs;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                db = _ref10.db;
                _args3 = _objectSpread({}, args), password = _args3.password, rest = _objectWithoutProperties(_args3, ["password"]);
                saltRounds = 10;
                _context2.next = 5;
                return new Promise(function (resolve, reject) {
                  _bcrypt["default"].hash(password, saltRounds, function (err, hash) {
                    if (err) {
                      reject(err);
                    }

                    resolve(hash);
                  });
                });

              case 5:
                hashedPassword = _context2.sent;
                newArgs = _objectSpread({}, rest, {
                  password: hashedPassword
                });
                return _context2.abrupt("return", db.models.employee.update(newArgs, {
                  where: {
                    user: newArgs.user
                  },
                  returning: true,
                  plain: true
                }).then(function (test) {
                  return test[1].dataValues;
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateEmployee(_x5, _x6, _x7, _x8) {
        return _updateEmployee.apply(this, arguments);
      }

      return updateEmployee;
    }(),
    deleteEmployee: function deleteEmployee(parent, args, _ref11, info) {
      var db = _ref11.db;
      return db.models.employee.findOne({
        where: {
          user: args.user
        }
      }).then(function (employee) {
        db.models.employee.destroy({
          where: {
            user: args.user
          }
        });
        return employee;
      });
    }
  }
};
exports["default"] = _default;